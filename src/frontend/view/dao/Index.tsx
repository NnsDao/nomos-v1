import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import storage from '@nnsdao/nnsdao-kit/helper/storage';
import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import logo from '../../assets/main/logo.png';
import NdpService from '../../utils/NdpService';
import { useAuth } from '../../utils/useAuth';
import DaoCreate from './daoCreate/Index';
import DaoHome from './daoHome/Index';

const Dao = () => {
  useAuth();
  const isLogin = Boolean(Number(window.localStorage.getItem('isLogin')));

  const [active, setActive] = useState('home');
  const activeList = [
    {
      name: 'daoHome',
      node: <DaoHome />,
      // node: <Team />,
      tooltip: 'Go Dao Home!',
      icon: <HomeIcon className=" cursor-pointer " sx={{ color: '#fff', fontSize: 28 }} />,
    },
    {
      name: 'daoCreate',
      node: (
        <Box>
          <DaoCreate />
        </Box>
      ),
      tooltip: 'Create Dao!',
      icon: <AddIcon className=" cursor-pointer  " sx={{ color: '#fff', fontSize: 28 }} />,
    },
    //Add other configuration here
  ];
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.setItem('isLogin', '0');
    window.localStorage.setItem('loginType', 'ooooooo');
    window.localStorage.setItem('principal', '');
    window.localStorage.clear();
    storage.set('loginType', '');
    navigate('/home', { replace: true });
    NdpService.resetService();
  };
  const goMain = () => {
    navigate('/main');
  };
  const link = str => {
    navigate(`/daos/${str}`);
  };
  return (
    <div className="bg-primary relative text-white" style={{ minHeight: '100vh' }}>
      <Box
        className="bg-primary w-full flex justify-between items-center px-100px sticky top-0 z-50 h-72"
        sx={{ borderBottom: '1px solid #282828' }}>
        <div className=" py-15 ">
          <a href="/home" className="cursor-pointer transition duration-300  ">
            <img className="h-40 w-96" src={logo} alt="nnsdao logo" />
          </a>
        </div>
        {isLogin ? (
          <div
            onClick={() => navigate('/main')}
            className={'w-128 h-48 rounded-3xl bg-sign text-white flex justify-center items-center cursor-pointer'}>
            {'Wallet'}
          </div>
        ) : (
          <Link to="/login">
            <div className={'w-128 h-48 rounded-3xl bg-sign text-white flex justify-center items-center'}>
              {'Sign up'}
            </div>
          </Link>
        )}
      </Box>
      <div className="fixed" style={{ height: 'calc(100vh - 72px)', borderRight: '1px solid #282828' }}>
        {activeList.map(item => (
          <div key={item.name} onClick={() => navigate(`/daos/${item.name}`)} className=" mx-20 my-24">
            <Tooltip
              title={item.tooltip}
              TransitionComponent={Zoom}
              placement="right"
              TransitionProps={{ timeout: 200 }}>
              <Box
                className="flex justify-center items-center w-40 h-40"
                sx={{ border: '1px solid #282828', borderRadius: 20, '&:hover': { border: '1px solid #818994' } }}>
                {item.icon}
              </Box>
            </Tooltip>
          </div>
        ))}
      </div>

      <div className="flex-1 flex justify-center">
        {/* <Box width={970} marginY={'25px'}>
          {
            activeList.filter(item => {
              return item.name === active;
            })[0].node
          }
        </Box> */}
        {/* <ProposalInfo></ProposalInfo> */}

        <Routes>
          <Route path="/daoHome" element={<DaoHome />} />
          <Route path="/daoCreate" element={<DaoCreate />} />
        </Routes>
      </div>
    </div>
  );
};
export default Dao;
