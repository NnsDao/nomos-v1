import storage from '@nnsdao/nnsdao-kit/helper/storage';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import nnsDaoIcon from '../../assets/home/nnsdao.png';
import NdpService from '../../utils/NdpService';
import Account from './account/Index';
import Header from './components/Header';
import Nav from './components/Nav';
import Daos from './daos/Index';
import DashBoard from './DashBoard/Index';
import Wallet from './wallet/Index';

const MainIndex = () => {
  const history = useHistory();

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
  const [active, setActive] = useState('Wallet');
  const clickActor = (val: string) => {
    setActive(val);
  };
  const tabList = ['Activity', 'DAOs', 'DAOn', 'Badges'];
  const [accountTab, setAccountTab] = useState('Badges');
  const logout = () => {
    window.localStorage.setItem('isLogin', '0');
    window.localStorage.setItem('loginType', 'ooooooo');
    window.localStorage.removeItem('principal');
    window.localStorage.clear();
    storage.set('loginType', '');
    NdpService.resetService();
    history.push('/home');
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

  // getPlugActor
  useEffect(() => {
    NdpService.getPlugActor();
  }, []);
  return (
    <div className="bg-primary">
      <Header clickActor={clickActor} handleMenu={handleMenu} />
      <div className={'flex'}>
        <div>
          <Nav
            daoList={daoList}
            active={active}
            onClick={(val: string) => {
              console.log(val, 'val');
              setActive(val);
            }}
          />
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
