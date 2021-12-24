import React, { useState } from 'react';
import Activity from './activity/Index';
import Badges from './badges/Index';
import DAOn from './daon/Index';
import DAOs from './daos/Index';
import './index.css';
const Index = () => {
  const tabList = ['Activity', 'DAOs', 'DAOn', 'Badges'];
  const [active, setActive] = useState('Activity');

  return (
    <>
      <div className="account-wrapper">
        <div className="account-header">
          <div className="account-header-actor"></div>
          <div className="account-header-text-wrapper">
            <span className="account-header-patrick">Patrick11234345t65756787688979</span>
            <div className="account-header-info">
              <span>{'#' + '11111'} </span>
              <span>{'@' + 'nickName'} </span>
              <img src="" alt="tubiao" />
            </div>
          </div>
        </div>
        <div className="account-tab-header">
          {tabList.map((item, index) => (
            <span
              className={`account-tab-button ${active === item ? 'account-tab-button-active' : ''}`}
              key={index}
              onClick={() => {
                setActive(item);
              }}>
              {item}
            </span>
          ))}
        </div>
        <div className="account-tab-content">
          {active === 'Activity' ? <Activity /> : ''}
          {active === 'DAOs' ? <DAOs /> : ''}
          {active === 'DAOn' ? <DAOn /> : ''}
          {active === 'Badges' ? <Badges /> : ''}
        </div>
      </div>
    </>
  );
};
export default Index;
