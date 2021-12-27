import approve from '@/assets/main/approve.png';
import React from 'react';
import Activity from './activity/Index';
import Badges from './badges/Index';
import DAOn from './daon/Index';
import DAOs from './daos/Index';
import './index.css';
type Prop = {
  tabList: Array<string>;
  active: string;
  setAccountTab: Function;
};
const Index = (prop: Prop) => {
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
              <img src={approve} alt="" width={'44px'} height={'44px'} />
            </div>
          </div>
        </div>
        <div className="account-tab-header">
          {prop.tabList.map((item, index) => (
            <span
              className={`account-tab-button ${prop.active === item ? 'account-tab-button-active' : ''}`}
              key={index}
              onClick={() => {
                prop.setAccountTab(item);
              }}>
              {item}
            </span>
          ))}
        </div>
        <div className="account-tab-content">
          {prop.active === 'Activity' ? <Activity /> : ''}
          {prop.active === 'DAOs' ? <DAOs /> : ''}
          {prop.active === 'DAOn' ? <DAOn /> : ''}
          {prop.active === 'Badges' ? <Badges /> : ''}
        </div>
      </div>
    </>
  );
};
export default Index;
