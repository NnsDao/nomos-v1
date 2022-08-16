import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Tooltip } from '@mui/material';
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
      icon: <HomeIcon className=" cursor-pointer " sx={{ color: '#fff', fontSize: 28 }} />,
    },
    {
      name: 'Create',
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

  return (
    <div className="w-full m-auto bg-primary h-1200px text-white flex flex-row pt-72">
      <Box component="div" sx={{ height: 1200, borderRight: '1px solid #282828' }}>
        {activeList.map(item => (
          <div key={item.name} onClick={() => setActive(item.name)} className=" mx-20 my-24">
            <Tooltip title={item.tooltip} TransitionComponent={Zoom} placement="right" TransitionProps={{ timeout: 200 }}>
              <Box className="flex justify-center items-center w-40 h-40" sx={{ border: '1px solid #282828', borderRadius: 20, '&:hover': { border: '1px solid #818994' } }}>
                {item.icon}
              </Box>
            </Tooltip>
          </div>
        ))}
      </Box>
      <div className="flex-1 flex justify-center ">
        <Box width={970} marginY={'25px'}>
          {
            activeList.filter(item => {
              return item.name === active;
            })[0].node
          }
        </Box>
      </div>
    </div>
  );
};
export default Dao;
