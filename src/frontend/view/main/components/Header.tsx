import React, { useState } from 'react';
import logo from '../../../assets/main/logo.png';
import nnsAvatar from '../../../assets/nnsdao-logo-200.png';
import './header.css';
type Prop = {
  clickActor: Function;
  handleMenu: Function;
};

const Header = (prop: Prop) => {
  const accountId: string = window.localStorage.getItem('accountId') ? window.localStorage.getItem('accountId') + '' : '';
  const isLogin: boolean = Boolean(Number(window.localStorage.getItem('isLogin')));
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleShowMenu = (bool: boolean) => {
    setIsShowMenu(bool);
  };

  // const menuList = ['Profile', 'My DAOs', 'My DAOn', 'My Wallet', 'Logout'];
  const menuList = ['Profile', 'My Wallet', 'Logout'];
  return (
    <>
      <div className={'flex justify-between py-24'}>
        <div className="ml-44 ">
          <a href="/home" className="cursor-pointer transition duration-300  ">
            <img className="h-40 w-96" src={logo} alt="nnsdao logo" />
          </a>
        </div>
        {/* <div className={'relative ml-32'}>
          <Input
            style={{ minWidth: '47%', width: '47vw', height: '48px', background: 'rgba(225, 225, 225, 0.13)', borderColor: '#3F62E4', textIndent: '50px', color: 'white', borderRadius: '26px' }}
            placeholder="Enter your desired dao"
          />
          <img src={magnifier} className={' position-buttom'} alt="" />
        </div> */}
        <div className="flex items-center mr-44">
          {/* <div>
            <img src={bell} className={'w-'} alt="" />
          </div> */}
          {isLogin ? (
            // <div className={'w-200px h-10 leading-10 text-right text-white cursor-pointer'}>Address:{accountId?.slice(0, 8) + '...'}</div>
            <div className="flex justify-center items-center cursor-pointer " onClickCapture={() => prop.clickActor('Account')} onMouseLeave={() => handleShowMenu(false)}>
              <div className="ml-36 relative z-50">
                <img className="h-32 w-32" src={nnsAvatar} alt="nnsdao logo" onMouseOver={() => handleShowMenu(true)} />
                {isShowMenu ? (
                  <div className="header-nav-wrapper">
                    {menuList.map(item => (
                      <div className=" header-nav-item" key={item} onClick={() => prop.handleMenu(item)}>
                        {item}
                      </div>
                    ))}
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className="flex-col text-white m-2">{accountId?.slice(0, 8) + '...'}</div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <div className="ml-33">
                <img className="h-32 w-32" src={nnsAvatar} alt="nnsdao logo" />
              </div>
              <div className="text-white m-10">NickName</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
