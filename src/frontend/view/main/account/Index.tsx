import approve from '@/assets/main/approve.png';
import React, { useEffect, useState } from 'react';
import NdpService from '../../../utils/NdpService';
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
  // const getAllBadgeList = async () => {
  //   try {
  //     const AllBadgeList = await NdpService.getAllBadgeList();
  //     console.log(AllBadgeList, 'getAllBadgeList');
  //   } catch (error) {
  //     console.error('getAllBadgeList', error);
  //   }
  // };
  // useEffect(() => {
  //   getAllBadgeList();
  // }, []);
  const [userBadgeList, setUserBadgeList] = useState([]);

  let identity = NdpService.identity;
  const getUserBadgeList = async () => {
    try {
      const list = await NdpService.getUserBadgeList(identity.getPrincipal());
      setUserBadgeList(list);
    } catch (error) {
      console.error('getUserBadgeList', error);
    }
  };

  useEffect(() => {
    getUserBadgeList();
  }, []);

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
          {prop.tabList.map((item, idx) => (
            <span
              className={`account-tab-button ${prop.active === item ? 'account-tab-button-active' : ''}`}
              key={idx}
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
          {prop.active === 'Badges' ? <Badges badgesList={userBadgeList} /> : ''}
        </div>
      </div>
    </>
  );
};
export default Index;
