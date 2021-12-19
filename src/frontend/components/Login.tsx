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
      history.push('/story');
    } else if (hash === 'Product') {
      history.push('/product');
    } else if (hash === 'Home') {
      history.push('/home');
    }
  };
  const [isloading, setIsLoading] = useState(false);

  const onStoic = async () => {
    const key = 'loginLoading';
    setIsLoading(true);
    await NdpService.login();

    let identity = NdpService.identity;
    if (identity.getPrincipal().toText()) {
      // message.loading({ content: 'Logging in...', key, duration: 0 });
      window.localStorage.setItem('principal', identity.getPrincipal().toText());
      window.localStorage.setItem('usePrincipal', identity.getPrincipal().toText());
      window.localStorage.setItem('isLogin', '1');
      window.localStorage.setItem('logonTime', new Date().getTime() + '');
      const { addr } = await NdpService.approve();
      window.localStorage.setItem('accountId', addr);
      message.success({ content: 'Login Success!', key, duration: 2 });
      setIsLoading(false);

      history.push('/home');
    }
    setIsLoading(false);
  };

  return (
    <>
      <Loading isLoading={isloading} changeState={() => setIsLoading(isloading)} />

      <div className="login-wrapper ">
        <div className="login-left">
          <div className="login-info">
            <div className="login-title">DAOs To Earn</div>
            <span>you can be a</span>
            <br />
            <span>boss.</span>
            <br />
            <span>you just work for </span>
            <br />
            <span>yourself</span>
            <br />
          </div>
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
            <div className="login-outside">
              <div className="login-item-plug">
                <img src={plug} alt="plug" />
                <span>Plug Identity</span>
                <span className="absolute bottom-0 right-0 p-1 text-xs">Coming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
