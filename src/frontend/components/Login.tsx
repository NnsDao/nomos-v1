import { plugLogin, stoicLogin } from '@nnsdao/nnsdao-kit';
import storage from '@nnsdao/nnsdao-kit/helper/storage';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import plug from '../assets/login/plug.png';
import stoic from '../assets/login/stoic.png';
import { useUserStore } from '../hooks/userStore';
import { getDistributeActor } from '../service';
import canister, { canisterIdList } from '../service/config';
import Loading from './Loading';
import './login.css';

const Index = () => {
  const navigate = useNavigate();
  const userStore = useUserStore();
  const routerLink = (hash: string) => {
    if (hash === 'Story') {
      const wins: any = window.open('/story', '_blank');
      wins.focus();
    } else if (hash === 'Product') {
      const wins: any = window.open('/product', '_blank');
      wins.focus();
    } else if (hash === 'Home') {
      navigate('/home');
    }
  };
  const [isLoading, setIsLoading] = useState(false);

  async function signIn(type: string) {
    storage.set('loginType', type ?? '');
    setIsLoading(true);

    let loginRes = null as any;
    if (type == 'plug') {
      const whiteList = canisterIdList.concat(Object.values(canister).map(item => item.cid));
      loginRes = await plugLogin(whiteList);
    } else if (type == 'stoic') {
      loginRes = await stoicLogin();
    }
    if (!loginRes) return;
    console.log(`loginRes`, loginRes);
    const loginInfo = {
      loginType: type ?? '',
      principalId: loginRes.principalId,
      accountId: loginRes.accountId,
      isLogin: true,
    };
    // @ts-ignore
    storage.set('userInfo', loginInfo);
    userStore.dispatch({
      type: 'login',
      data: loginInfo,
    });
    successLogin();
  }

  const successLogin = () => {
    getExChange();
    setIsLoading(false);
    navigate('/home');
    toast.success('Login Success!');
  };
  const getExChange = async () => {
    const distributeActor = await getDistributeActor(true);
    console.log(distributeActor, 'distributeActor', distributeActor[Symbol.for('ic-agent-metadata')]);
    const res = await distributeActor.try_exchange();
    console.log(res, 'getExChange');
  };

  return (
    <>
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
            <div className="login-item login-item-stoic" onClick={() => signIn('stoic')}>
              <img src={stoic} alt="stoic" />
              <span>Stoic Identity</span>
            </div>
            {/* <div className="login-item login-item-internet">
              <img src={dfinity} alt="II" />
              <span>Internet Identity</span>
            </div> */}
            <div className="login-outside cursor-pointer">
              <div className="login-item-plug" onClick={() => signIn('plug')}>
                <img src={plug} alt="plug" />
                <span>Plug Identity</span>
                {/* <span className="absolute bottom-0 right-0 p-1 text-xs">Coming</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loading isLoading={isLoading} changeState={() => setIsLoading(isLoading)} />
      <Toaster></Toaster>
    </>
  );
};
export default Index;
