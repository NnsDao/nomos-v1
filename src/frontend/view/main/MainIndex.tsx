import { plugLogout, stoicLogout } from '@nnsdao/nnsdao-kit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import nnsDaoIcon from '../../assets/home/nnsdao.png';
import { useUserStore } from '../../hooks/userStore';
import { useAuth } from '../../utils/useAuth';
import Account from '../proflie/account/Index';
import Wallet from '../proflie/wallet/Index';
import Header from './components/Header';
import Nav from './components/Nav';
import Daos from './daos/Index';
import DashBoard from './DashBoard/Index';

const MainIndex = () => {
  useAuth();
  const navigate = useNavigate();

  const daoList = [
    {
      text: 'Patrick',
      url: nnsDaoIcon,
    },
    // {
    //   text: 'Japan',
    //   url: japandaoIcon,
    // },
  ];
  const [active, setActive] = useState('Patrick');
  const clickActor = (val: string) => {
    setActive(val);
  };
  const tabList = ['Activity', 'DAOs', 'DAOn', 'Badges'];
  const [accountTab, setAccountTab] = useState('Badges');
  const userStore = useUserStore();
  const logout = async () => {
    // window.localStorage.setItem('isLogin', '0');
    // window.localStorage.setItem('loginType', 'ooooooo');
    // window.localStorage.setItem('principal', '');
    // window.localStorage.clear();
    // storage.set('loginType', '');
    const loginType = userStore.loginType;
    if (loginType == 'plug') {
      try {
        await plugLogout();
      } catch (error) {
        console.error('logout error', error);
      }
    } else if (loginType == 'stoic') {
      await stoicLogout();
    }
    userStore.dispatch({ type: 'logout' });
    navigate('/home');
  };
  const handleMenu = (str: string) => {
    console.log(str, 'str');

    switch (str) {
      case 'My DAOs':
        setAccountTab('DAOs');
        break;
      case 'My DAOn':
        setAccountTab('DAOn');
        break;
      case 'My Wallet':
        setActive('Wallet');
        break;
      case 'Logout':
        logout();
        break;
      default:
        setAccountTab('Badges');
        break;
    }
  };

  return (
    <div className="bg-primary">
      <Header clickActor={clickActor} handleMenu={handleMenu} />
      <div className={'flex'}>
        <div>
          <Nav daoList={daoList} active={active} onClick={clickActor} />
        </div>
        <div className="mx-6 min-w-1550px rounded-3xl bg-main-content flex-1 mb-5">
          {active === 'Patrick' ? <Daos /> : ''}
          {active === 'Japan' ? <Daos /> : ''}
          {active === 'DashBoard' ? <DashBoard /> : ''}
          {active === 'Wallet' ? <Wallet /> : ''}
          {active === 'Account' ? <Account tabList={tabList} active={accountTab} setAccountTab={setAccountTab} /> : ''}
        </div>
      </div>
      <div className="text-gray-200	 pb-5 text-sl text-center ">@ 2022, NnsDAO Labs</div>
    </div>
  );
};
export default MainIndex;
