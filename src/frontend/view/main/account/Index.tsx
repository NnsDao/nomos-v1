import approve from '@/assets/main/approve.png';
import React, { useEffect } from 'react';
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
  const getAllBadgeList = async () => {
    try {
      const AllBadgeList = await NdpService.getAllBadgeList();
      console.log(AllBadgeList, 'getAllBadgeList');
    } catch (error) {
      console.error('getAllBadgeList', error);
    }
  };
  let identity = NdpService.identity;
  console.log(identity.getPrincipal().toUint8Array(), '11111111');
  const getUserBadgeListParams = [identity.getPrincipal().toUint8Array()];
  console.log('0000000000');
  const getUserBadgeList = async () => {
    try {
      const UserBadgeList = await NdpService.getUserBadgeList(getUserBadgeListParams);
      console.log(UserBadgeList, 'getUserBadgeList');
    } catch (error) {
      console.error('getAllBadgeList', error);
    }
  };

  useEffect(() => {
    getUserBadgeList();
  }, []);
  useEffect(() => {
    getAllBadgeList();
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
          {prop.active === 'Badges' ? <Badges /> : ''}
        </div>
      </div>
    </>
  );
};
export default Index;
