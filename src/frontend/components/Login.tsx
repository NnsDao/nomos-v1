import { agent } from '@nnsdao/nnsdao-kit/helper/agent';
import storage from '@nnsdao/nnsdao-kit/helper/storage';
import { message } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import plug from '../assets/login/plug.png';
import stoic from '../assets/login/stoic.png';
import { getDistributeActor } from '../service';
import NdpService from '../utils/NdpService';
import Loading from './Loading';
import './login.css';

const Index = () => {
  let history = useHistory();
  const routerLink = (hash: string) => {
    if (hash === 'Story') {
      const wins: any = window.open('/story', '_blank');
      wins.focus();
    } else if (hash === 'Product') {
      const wins: any = window.open('/product', '_blank');
      wins.focus();
    } else if (hash === 'Home') {
      history.push('/home');
    }
  };
  const [isloading, setIsLoading] = useState(false);

  const onStoic = async () => {
    window.localStorage.setItem('loginType', 'stoic');
    storage.set('loginType', 'stoic');
    setIsLoading(true);
    await NdpService.stoicLogin();
    let identity = NdpService.identity;
    console.log(identity, 'identity');

    agent.replaceIdentity(identity);
    console.log(agent, 'agent');

    if (identity.getPrincipal().toText()) {
      window.localStorage.setItem('principal', identity.getPrincipal().toText());
      window.localStorage.setItem('usePrincipal', JSON.stringify(identity.getPrincipal()));
      window.localStorage.setItem('isLogin', '1');
      window.localStorage.setItem('logonTime', new Date().getTime() + '');
      const { addr } = await NdpService.approve();
      window.localStorage.setItem('accountId', addr);
      successLogin();
    }
  };
  const onPlug = async () => {
    window.localStorage.setItem('loginType', 'plug');
    storage.set('loginType', 'plug');
    // Detect Plug extension
    if (!window.ic?.plug) {
      return message.warning('Plug Not installed');
    }
    setIsLoading(true);
    await NdpService.plugLogin();
    const { addr } = await NdpService.approve();
    window.localStorage.setItem('accountId', addr);
    window.localStorage.setItem('isLogin', '1');
    window.localStorage.setItem('logonTime', new Date().getTime() + '');
    successLogin();
  };

  const successLogin = () => {
    getExChange();
    setIsLoading(false);
    history.push('/home');
    message.success({ content: 'Login Success!', key: 'loginLoading', duration: 2 });
  };
  const getExChange = async () => {
    const distributeActor = await getDistributeActor({ needAuth: true });
    console.log(distributeActor, 'distributeActor', distributeActor[Symbol.for('ic-agent-metadata')]);
    const res = await distributeActor.try_exchange();
    console.log(res, 'getExChange');
  };

  return (
    <>
      <Loading isLoading={isloading} changeState={() => setIsLoading(isloading)} />
      <div className="login-wrapper min-w-1200px m-auto">
        <div className="login-left">
          <div className="login-title">DAOs To Earn</div>
          <span>You can be a</span>
          <br />
          <span>boss.</span>
          <br />
          <span>You just work for </span>
          <br />
          <span>yourself.</span>
          <br />
        </div>
        <div className="login-right">
          <div className="login-link-wrapper">
            <span onClick={() => routerLink('Story')} className="cursor-pointer ">
              Story
            </span>
            <span onClick={() => routerLink('Product')} className="cursor-pointer ">
              Product
            </span>
            <span onClick={() => routerLink('Home')} className="cursor-pointer ">
              Home
            </span>
          </div>
          <div className="login-function-wrapper">
            <div className="login-item login-item-stoic" onClick={() => onStoic().then()}>
              <img src={stoic} alt="stoic" />
              <span>Stoic Identity</span>
            </div>
            {/* <div className="login-item login-item-internet">
              <img src={dfinity} alt="II" />
              <span>Internet Identity</span>
            </div> */}
            <div className="login-outside cursor-pointer">
              <div className="login-item-plug" onClick={() => onPlug()}>
                <img src={plug} alt="plug" />
                <span>Plug Identity</span>
                {/* <span className="absolute bottom-0 right-0 p-1 text-xs">Coming</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
