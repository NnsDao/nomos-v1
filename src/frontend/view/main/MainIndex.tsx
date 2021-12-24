import React, { useState } from 'react';
import japandaoIcon from '../../assets/home/japandao.png';
import nnsDaoIcon from '../../assets/home/nnsdao.png';
import Account from './account/Index';
import Header from './components/Header';
import Nav from './components/Nav';
import Daos from './daos/Index';
import DashBoard from './DashBoard/Index';
import Wallet from './wallet/Index';
const MainIndex = () => {
  const daoList = [
    {
      text: 'Patrick',
      url: nnsDaoIcon,
    },
    {
      text: 'Japan',
      url: japandaoIcon,
    },
  ];
  const [active, setActive] = useState('Wallet');
  const clickActor = (val: string) => {
    setActive(val);
  };
  return (
    <div className={'bg-primary'}>
      <Header clickActor={clickActor} />
      <div className={'flex'}>
        <div>
          <Nav
            daoList={daoList}
            active={active}
            onClick={(val: string) => {
              setActive(val);
            }}
          />
        </div>
        <div className="mx-6 min-w-1550px rounded-3xl bg-main-content flex-1 mb-5">
          {active === 'Patrick' ? <Daos /> : ''}
          {active === 'Japan' ? <Daos /> : ''}
          {active === 'DashBoard' ? <DashBoard /> : ''}
          {active === 'Wallet' ? <Wallet /> : ''}
          {active === 'Account' ? <Account /> : ''}
        </div>
      </div>
      <div className="text-gray-200	 pb-5 text-sl text-center ">@ 2021, NnsDAO Labs</div>
    </div>
  );
};
export default MainIndex;
