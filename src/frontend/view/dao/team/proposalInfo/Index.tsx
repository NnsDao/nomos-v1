import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Avatar, Box, Divider } from '@mui/material';
import React from 'react';
const ProposalInfo = () => {
  const StructureList = ['1', '2', '3'];
  return (
    <Box>
      <Box className="flex justify-between pt-10 pb-20">
        <Box sx={{ width: '620px', marginRight: '20px' }}>
          <Box sx={{ color: '#8b949e', cursor: 'pointer' }}>
            <KeyboardBackspaceIcon sx={{ width: '20px', height: '20px', marginRight: '6px' }}></KeyboardBackspaceIcon>
            return
          </Box>
          <Box className="">
            <Box sx={{ paddingY: '15px', fontSize: '26px', wordWrap: 'break-word' }}>title111111111111111111111111111111111111111111111</Box>
            <Box className="flex justify-between py-20 ">
              <Box className="flex items-center">
                <Box sx={{ paddingX: '15px', paddingY: '1px', background: 'green', borderRadius: '20px', cursor: 'pointer' }}>active</Box>
                <Avatar sx={{ width: 18, height: 18, marginX: '10px', cursor: 'pointer' }} src={'avatar'}></Avatar>
                <Box sx={{ cursor: 'pointer' }}>name</Box>
              </Box>
              <Box className="cursor-pointer">
                <Box>share</Box>
              </Box>
            </Box>
            <Box sx={{ color: '#8b949e', fontSize: '18px', wordWrap: 'break-word' }}>
              contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
            </Box>
          </Box>
          <Box sx={{ marginTop: '90px', border: '1px solid #282828', borderRadius: '10px' }}>
            <Box sx={{ paddingY: '18px', paddingX: '25px', fontWeight: '900' }}>cast your vote</Box>
            <Divider sx={{ height: '1px', width: '618px', background: '#282828' }} orientation="vertical" />
            <Box sx={{ padding: '24px' }}>
              <Box
                sx={{
                  paddingY: '9px',
                  textAlign: 'center',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: '1px solid #282828',
                  marginBottom: '20px',
                  borderRadius: '22px',
                  '&:hover': { border: '1px solid #818994' },
                }}>
                FOR Structure
              </Box>
              <Box sx={{ paddingY: '9px', textAlign: 'center', fontWeight: '600', cursor: 'pointer', border: '1px solid #282828', borderRadius: '22px', '&:hover': { border: '1px solid #818994' } }}>
                AGAINST Structure
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: '90px', border: '1px solid #282828', borderRadius: '10px' }}>
            <Box sx={{ paddingY: '18px', paddingX: '25px', fontWeight: '900' }}>votes</Box>
            {StructureList.map(item => (
              <Box>
                <Divider sx={{ height: '1px', width: '618px', background: '#282828' }} orientation="vertical" />
                <Box className="flex justify-between items-center p-14" sx={{ fontWeight: '600' }}>
                  <Box className="flex items-center">
                    <Avatar sx={{ width: 18, height: 18, marginRight: '10px', cursor: 'pointer' }} src={'avatar'}></Avatar>
                    <Box sx={{ cursor: 'pointer' }}>name</Box>
                  </Box>
                  <Box>FOR Structure/AGAINST Structure</Box>
                  <Box>xxx NDP </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="flex-1">
          <Box>information</Box>
          <Box>current results</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProposalInfo;
