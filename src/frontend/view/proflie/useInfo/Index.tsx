import Avatar from '../../../components/Avatar';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import copy from '../../../assets/home/copy.png';
import reputation from '../../../assets/main/reputation.png';
import { useUserStore } from '../../../hooks/userStore';

const UseInfo = () => {
  const userStore = useUserStore();
  const accountId = userStore.accountId;
  const [userInfo, setUserInfo] = useState({
    acatar: '',
    nickName: '',
    address: '',
    reputation: '',
    index: '',
  });
  const copyAddress = () => {
    navigator.clipboard.writeText(userInfo.address);
    toast.success('The account address has been copied to the clipboard');
  };
  const getCurrentDate = () => {
    const myDate = new Date();
    const year = myDate.getFullYear();
    const month = myDate.getMonth();
    const day = myDate.getDate();
    return year + '/' + (month + 1) + '/' + (day - 1);
  };
  return (
    <div className="account-header">
      <div className="flex">
        <Avatar />

        {/* <div className="account-header-actor"></div> */}
        <div className="account-header-text-wrapper">
          {accountId ? (
            <div className="flex justify-between items-center account-header-patrick" onClick={copyAddress}>
              <span className=" cursor-pointer ">{accountId?.slice(0, 6) + '....' + accountId?.slice(16, 20)}</span>
              <img className="ml-2 cursor-pointer " src={copy} width={'19px'} height={'19px'} alt="" />
            </div>
          ) : (
            <div>address</div>
          )}

          <div className="account-header-info">
            {/* <span>{`#  ${Math.floor(Number(Number(userInfo.index)))} `} </span> */}
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
      <Toaster></Toaster>
    </div>
  );
};
export default UseInfo;
