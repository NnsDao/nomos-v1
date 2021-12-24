import { message } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import plug from '../assets/login/plug.png';
import stoic from '../assets/login/stoic.png';
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
    setIsLoading(true);
    await NdpService.stoicLogin();

    let identity = NdpService.identity;
    if (identity.getPrincipal().toText()) {
      window.localStorage.setItem('principal', identity.getPrincipal().toText());
      window.localStorage.setItem('usePrincipal', identity.getPrincipal().toText());
      window.localStorage.setItem('isLogin', '1');

      window.localStorage.setItem('logonTime', new Date().getTime() + '');
      const { addr } = await NdpService.approve();
      window.localStorage.setItem('accountId', addr);
      message.success({ content: 'Login Success!', key: 'loginLoading', duration: 2 });
      setIsLoading(false);

      history.push('/home');
    }
    setIsLoading(false);
  };
  const onPlug = async () => {
    // Detect Plug extension
    if (!window.ic?.plug) {
      return message.warning('Plug Not installed');
    }
    setIsLoading(true);
    await NdpService.plugLogin();
    message.success({ content: 'Login Success!', key: 'loginLoading', duration: 2 });
    window.localStorage.setItem('isLogin', '1');
    window.localStorage.setItem('logonTime', new Date().getTime() + '');
    history.push('/home');
    setIsLoading(false);
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
