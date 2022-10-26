import { Box } from '@mui/material';
// import storage from '@nnsdao/nnsdao-kit/helper/storage';
import Header from '@view/main/components/Header';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCommonLogout } from '../../hooks/login';
import Account from './account/Index';
import UseInfo from './useInfo/Index';
import Wallet from './wallet/Index';

const Profile = () => {
  const [active, setActive] = useState('Patrick');
  const [accountTab, setAccountTab] = useState('Badges');
  const navigate = useNavigate();
  const { logout: commonLogout } = useCommonLogout();
  const clickActor = (val: string) => {
    setActive(val);
  };
  const logout = async () => {
    await commonLogout();
  };
  const handleMenu = (str: string) => {
    console.log(str, 'str');

    switch (str) {
      case 'My DAOs':
        setAccountTab('DAOs');
        break;
      case 'My DAOn':
        setAccountTab('DAOn');
        break;
      case 'My Wallet':
        setActive('Wallet');
        break;
      case 'Logout':
        logout();
        break;
      default:
        setAccountTab('Badges');
        break;
    }
  };
  return (
    <Box className="bg-primary">
      <Header clickActor={clickActor} handleMenu={handleMenu} />
      <Box className="mx-auto my-0 min-w-1200px max-w-1200px rounded-3xl bg-main-content flex-1 mb-5">
        <Box className="account-wrapper">
          <UseInfo></UseInfo>
          <Wallet></Wallet>
          <Account></Account>
        </Box>
      </Box>
    </Box>
  );
};
export default Profile;
