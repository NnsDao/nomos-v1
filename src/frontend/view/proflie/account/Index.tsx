import { Principal } from '@dfinity/principal';
import storage from '@nnsdao/nnsdao-kit/helper/storage';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useUserStore } from '../../../hooks/userStore';
import NdpService from '../../../utils/NdpService';
import './index.css';

// type Prop = {
//   tabList: Array<string>;
//   active: string;
//   setAccountTab: Function;
// };

const Account = prop => {
  const tabList = ['Activity', 'DAOs', 'DAOn', 'Badges'];
  const [accountTab, setAccountTab] = useState('Badges');
  const userStore = useUserStore();
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
    toast.success('The account address has been copied to the clipboard');
  };

  const [userBadgeList, setUserBadgeList] = useState([]);

  let identity = NdpService.identity;

  const pid = storage.get('loginType');
  const principal = userStore.principalId;
  let pids: any = null;
  const accountId = userStore.accountId;

  if (pid == 'plug') {
    pids = Principal.fromText(principal);
  } else {
    pids = identity?.getPrincipal();
  }

  console.log(pids, 'debug');

  const getUserBadgeList = async () => {
    try {
      const list = await NdpService.getUserBadgeList(pids);

      // @ts-ignore
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
  // useEffect(() => {
  //   getUserBadgeList();
  // }, []);
  const getCurrentDate = () => {
    const myDate = new Date();
    const year = myDate.getFullYear();
    const month = myDate.getMonth();
    const day = myDate.getDate();
    return year + '/' + (month + 1) + '/' + (day - 1);
  };
  return (
    <>
      {/* <div className="account-tab-header">
        {tabList.map((item, idx) => (
          <span
            className={`account-tab-button ${accountTab === item ? 'account-tab-button-active' : ''}`}
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
      <Toaster></Toaster> */}
    </>
  );
};
export default Account;
