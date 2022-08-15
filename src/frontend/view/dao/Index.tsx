import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import React, { useState } from 'react';
import DaoCreate from './daoCreate/Index';
import DaoHome from './daoHome/Index';

const Dao = () => {
  const [active, setActive] = useState('Home');
  const activeList = [
    {
      name: 'Home',
      node: <DaoHome />,
      tooltip: 'Go Dao Home!',
      icon: <HomeIcon className=" cursor-pointer m-2 " sx={{ '&:hover': { border: '1px solid gray', borderRadius: '50%' }, color: '#fff', fontSize: 30 }} />,
    },
    {
      name: 'Create',
      node: <DaoCreate />,
      tooltip: 'Create Dao!',
      icon: <AddIcon className=" cursor-pointer m-2 " sx={{ '&:hover': { border: '1px solid gray', borderRadius: '50%' }, color: '#fff', fontSize: 30 }} />,
    },
    //Add other configuration here
  ];

  return (
    <div className="w-full m-auto bg-primary h-1200px text-white flex flex-row pt-72">
      <div className="w-80 h-1200px  border-gray-500 border-r-2">
        {activeList.map(item => (
          <div key={item.name} onClick={() => setActive(item.name)} className="mx-10 my-13 ">
            <Tooltip title={item.tooltip} TransitionComponent={Zoom} placement="right" TransitionProps={{ timeout: 200 }}>
              <div className="  flex justify-center items-center ">{item.icon}</div>
            </Tooltip>
          </div>
        ))}
      </div>
      <div className="flex-1 ">
        {
          activeList.filter(item => {
            return item.name === active;
          })[0].node
        }
      </div>
    </div>
  );
};
export default Dao;
