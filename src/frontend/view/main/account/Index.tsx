import approve from '@/assets/main/approve.png';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import copy from '../../../assets/home/copy.png';
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
type userInfo = {
  avtar: string;
  nickname: string;
  address: string;
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
  const copyAddress = () => {
    navigator.clipboard.writeText(userInfo.address);
    message.success('The account address has been copied to the clipboard');
  };

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
  const [userInfo, setUserInfo] = useState({
    acatar: '',
    nickName: '',
    address: '',
  });
  const getUserInfo = async () => {
    try {
      const result = await NdpService.getUserInfo();
      console.log(result, 'getUserInfo');
      setUserInfo(result);
    } catch (error) {
      console.log('getUserInfo', error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  useEffect(() => {
    getUserBadgeList();
  }, []);

  return (
    <>
      <div className="account-wrapper">
        <div className="account-header">
          <div className="account-header-actor"></div>
          <div className="account-header-text-wrapper">
            {userInfo.address ? (
              <div className="flex justify-between items-center account-header-patrick" onClick={copyAddress}>
                <span className=" cursor-pointer ">{userInfo.address?.slice(0, 10) + '.....'}</span>
                <img className="-ml-2 cursor-pointer " src={copy} width={'19px'} height={'19px'} alt="" />
              </div>
            ) : (
              <div>address</div>
            )}

            <div className="account-header-info">
              <span>{'#' + '11111'} </span>
              <span>{userInfo.nickName || 'nickName'} </span>
              <img className="ml-2" src={approve} alt="" width={'40px'} height={'40px'} />
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
