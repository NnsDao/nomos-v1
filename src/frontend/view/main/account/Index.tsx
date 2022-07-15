import { Principal } from '@dfinity/principal';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import copy from '../../../assets/home/copy.png';
import reputation from '../../../assets/main/reputation.png';
import Avatar from '../../../components/Avatar';
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
  const copyAddress = () => {
    navigator.clipboard.writeText(userInfo.address);
    message.success('The account address has been copied to the clipboard');
  };

  const [userBadgeList, setUserBadgeList] = useState([]);

  let identity = NdpService.identity;

  const pid = window.localStorage.getItem('loginType');
  const principal = window.localStorage.getItem('principal')!;
  let pids: any = null;

  if (pid == 'plug') {
    pids = Principal.fromText(principal);
  } else {
    pids = identity?.getPrincipal();
  }

  console.log(pids, 'debug');

  const getUserBadgeList = async () => {
    try {
      const list = await NdpService.getUserBadgeList(pids);

      setUserBadgeList(list);
    } catch (error) {
      console.error('getUserBadgeList', error);
    }
  };
  const [userInfo, setUserInfo] = useState({
    acatar: '',
    nickName: '',
    address: '',
    reputation: '',
    index: '',
  });
  const getUserInfo = async () => {
    try {
      const result = await NdpService.getUserInfo();
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
  const getCurrentDate = () => {
    const myDate = new Date();
    const year = myDate.getFullYear();
    const month = myDate.getMonth();
    const day = myDate.getDate();
    return year + '/' + (month + 1) + '/' + (day - 1);
  };
  return (
    <>
      <div className="account-wrapper">
        <div className="account-header">
          <div className="flex">
            <Avatar />

            {/* <div className="account-header-actor"></div> */}
            <div className="account-header-text-wrapper">
              {userInfo.address ? (
                <div className="flex justify-between items-center account-header-patrick" onClick={copyAddress}>
                  <span className=" cursor-pointer ">{userInfo.address?.slice(0, 6) + '....' + userInfo.address?.slice(16, 20)}</span>
                  <img className="ml-2 cursor-pointer " src={copy} width={'19px'} height={'19px'} alt="" />
                </div>
              ) : (
                <div>address</div>
              )}

              <div className="account-header-info">
                <span>{`#  ${Math.floor(Number(Number(userInfo.index)))} `} </span>
                {/* <span>{userInfo.nickName || 'nickName'} </span> */}
                {/* <img className="ml-6" src={approve} alt="" width={'40px'} height={'40px'} /> */}
              </div>
            </div>
          </div>

          <div className="account-header-reputation">
            <img src={reputation} alt="" width="100%" height="" />
            <div className="reputation-text-wrapper">
              <div className="reputation-text">{Math.floor(Number(Number(userInfo.reputation))) || 0}</div>
              <div className="reputation-date">{getCurrentDate()}</div>
            </div>
          </div>
        </div>
        <div className="account-tab-header">
          {prop.tabList.map((item, idx) => (
            <span
              className={`account-tab-button ${prop.active === item ? 'account-tab-button-active' : ''}`}
              key={idx}
              // onClick={() => {
              //   prop.setAccountTab(item);
              // }}
            >
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
