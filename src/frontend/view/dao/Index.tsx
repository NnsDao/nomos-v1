import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/main/logo.png';

const Dao = () => {
  // useAuth();

  const isLogin = Boolean(Number(window.localStorage.getItem('isLogin')));

  const activeList = [
    {
      name: 'Home',
      router: 'home',
      tooltip: 'Go Dao Home!',
      icon: <HomeIcon className=" cursor-pointer " sx={{ color: '#fff', fontSize: 28 }} />,
    },
    {
      name: 'Create',
      router: 'createdao',
      tooltip: 'Create Dao!',
      icon: <AddIcon className=" cursor-pointer  " sx={{ color: '#fff', fontSize: 28 }} />,
    },
  ];
  const navigate = useNavigate();

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
            Wallet
          </div>
        ) : (
          <Link to="/login">
            <div className={'w-128 h-48 rounded-3xl bg-sign text-white flex justify-center items-center'}>Sign up</div>
          </Link>
        )}
      </Box>
      <div className="fixed" style={{ height: 'calc(100vh - 72px)', width: '80px', borderRight: '1px solid #282828' }}>
        {activeList.map(item => (
          <div key={item.name} onClick={() => navigate(item.router)} className=" mx-20 my-24">
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
      <div className="ml-80" style={{ minHeight: 'calc(100vh - 72px)', width: '970px', margin: '25px auto' }}>
        <Outlet />
      </div>
    </div>
  );
};
export default Dao;
