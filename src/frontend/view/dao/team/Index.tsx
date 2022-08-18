import { Avatar, Box } from '@mui/material';
import React, { useState } from 'react';
import Proposal from './proposal/Index';

const Team = () => {
  const tabList = ['proposal', 'new proposal', 'about', 'treasury', 'set up'];
  const [activeTab, setActiveTab] = useState('proposal');
  return (
    <Box className="w-900px   ">
      <Box
        sx={{
          width: 230,
          height: 500,
          display: 'flex',
          position: 'fixed',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '12px',
          background: '#0C0633',
          border: '1px solid #818994',
          color: '#fff',
          marginRight: '40px',
          marginBottom: '20px',
          paddingY: '20px',
          // '&:hover': {},
        }}>
        <Box>
          <Avatar sx={{ width: 82, height: 82 }} src={'avatar'}></Avatar>
        </Box>
        <Box className="text-22 pt-11">{'name'}1</Box>
        <Box sx={{ paddingY: '12px', color: 'gray' }}>{'member'}MEMBER</Box>
        <Box
          sx={{
            paddingX: '40px',
            paddingY: '8px',
            cursor: 'pointer',
            border: '1px solid #282828',
            background: '#2e54f6',
            borderRadius: '45px',
            fontWeight: '500',
            '&:hover': { background: '#2e54d1' },
          }}>
          {1 === 1 ? 'JOIN' : 'Quit'}
        </Box>
        <Box sx={{ marginY: '20px' }}>
          {tabList.map(item => (
            <Box
              onClick={() => setActiveTab(item)}
              key={item}
              sx={{ width: 230, paddingY: '8px', paddingLeft: '26px', cursor: 'pointer', transition: '150ms', fontWeight: '500' }}
              className={activeTab === item ? 'border-solid border-l-2 border-light-blue-500' : ''}>
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      <Box className=" max-w-700 ml-265px">
        <Proposal></Proposal>
      </Box>
    </Box>
  );
};
export default Team;
