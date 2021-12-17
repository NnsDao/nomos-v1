import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Daos from './daos/Index';
import DashBoard from './DashBoard/Index';
import Wallet from './wallet/Index';
const MainIndex = () => {
  const daoList = [
    {
      text: 'Patrick',
      url: '',
    },
    {
      text: 'Japan',
      url: '',
    },
  ];
  const [active, setActive] = useState('Wallet');
  return (
    <div className={'bg-primary'}>
      <Header />
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
        </div>
      </div>
      <div className="text-white pb-5 text-sl">@ 2021, NnsDAO Labs</div>
    </div>
  );
};
export default MainIndex;
