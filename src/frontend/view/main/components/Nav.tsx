import { Avatar } from 'antd';
import React from 'react';
import dashboard from '../../../assets/main/Dashboard.png';
import wallet from '../../../assets/main/Wallet.png';
import './nav.css';
type prop = {
  daoList: Array<{ text?: string; url?: string }>;
  active: string,
  onClick: Function
};
const Nav = (prop: prop) => {
  return (
    <>
      <div className=" text-white flex flex-col items-center nav-wrapper  ">
        <div onClick={() => prop.onClick('Dashboard')} className={`$mt-1  flex items-center justify-center w-240px h-48px cursor-pointer ${prop.active === 'Dashboard' ? 'bg-gradient' : ''}  p-3 `}>
          <div className="flex items-center justify-center -ml-20">
            <img src={dashboard} alt="" />
            <span className="ml-3 ">Dashboard</span>
          </div>
        </div>
        <div onClick={() => prop.onClick('Wallet')} className="mt-10 mb-20 justify-center w-240px h-48px">
          <span className={' style-text '}>ACCOUNT</span>
          <div className={`flex items-center mt-9 justify-center w-240px h-48px cursor-pointer ${prop.active === 'Wallet' ? 'bg-gradient' : ''}`}>
            <div className="flex items-center justify-center -ml-28">
              <img src={wallet} alt="" />
              <span className="ml-3">Wallet</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <span className={' style-text '}>DAOs</span>
          <div className={' mt-9  justify-center w-240px h-48px'}>
            {prop.daoList.map((item, index) => (
              <div onClick={() => prop.onClick(item.text)} key={index} className={`flex items-center -ml-1.5 mb-8 justify-center w-240px h-48px cursor-pointer ${prop.active === item.text ? 'bg-gradient' : ''}`}>
                <div className="flex items-center justify-center -ml-24">
                  <Avatar size={28} />
                  {/* <img src={item.url} alt="" /> */}
                  <span className="ml-3"> {item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="create">
          <div className="img-wrapper">
            <div className="combinedShape"></div>
            <div className="Group2"></div>
          </div>
          <div className="ml-4">Create DAOn</div>
          <div className="ml-4 mb-6 text-left">Increase your speed with more members</div>
        </div>
        <div className="logout -ml-24">
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};
export default Nav;
