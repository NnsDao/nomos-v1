import { Avatar, Input } from 'antd';
import React from 'react';
import bell from '../../../assets/main/bell.png';
import logo from '../../../assets/main/logo.png';
import magnifier from '../../../assets/main/magnifier.png';
import './header.css';
const Header = () => {
  const accountId: string = window.localStorage.getItem('accountId') ? window.localStorage.getItem('accountId') + '' : '';
  const isLogin: boolean = Boolean(Number(window.localStorage.getItem('isLogin')));
  return (
    <>
      <div className={'flex justify-between py-6'}>
        <div className="ml-11 ">
          <a href="https://nnsdao.org/" className="cursor-pointer transition duration-300  ">
            <img className="h-10 w-24" src={logo} alt="nnsdao logo" />
          </a>
        </div>
        <div className={'relative ml-32'}>
          <Input
            style={{ minWidth: '47%', width: '47vw', height: '48px', background: 'rgba(225, 225, 225, 0.13)', borderColor: '#3F62E4', textIndent: '50px', color: 'white', borderRadius: '26px' }}
            placeholder="Enter your desired dao"
          />
          <img src={magnifier} className={' position-buttom'} alt="" />
        </div>
        <div className="flex items-center mr-11">
          <div>
            <img src={bell} className={'w-'} alt="" />
          </div>
          {isLogin ? (
            <div className={'w-200px h-10 leading-10 text-right text-white cursor-pointer'}>{accountId?.slice(0, 20) + '...'}</div>
          ) : (
            <div className="flex justify-center items-center">
              <div className="ml-9">
                <Avatar size={52} />
              </div>
              <div className="text-white m-2">NickName</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
