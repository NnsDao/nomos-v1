import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Wallet from './wallet/Index';
import DashBoard from './DashBoard/Index';
import Daos from './daos/Index';
const MainIndex = () => {
  let daoList = [
    {
      text: 'Patrick',
      url: '',
    },
    {
      text: 'Japan',
      url: '',
    },
  ];
  return (
    <div className={'bg-primary'}>
      <Header />
      <div className={'flex'}>
        <div>
          <Nav daoList={daoList} />
        </div>
        <div className="mx-6 min-w-1550px rounded-3xl bg-main-content flex-1 mb-5">
          <Daos />
          <DashBoard />
          <Wallet />
        </div>
      </div>
      <div className="text-white pb-5 text-sl">@ 2021, NnsDAO Labs</div>
    </div>
  );
};
export default MainIndex;
