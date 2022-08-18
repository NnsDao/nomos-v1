import { Avatar, Box } from '@mui/material';
import React from 'react';
const ProposalItem = props => {
  const goProposalInfo = () => {
    console.log('goProposalInfo');
  };
  return (
    <Box>
      {props.data.map(item => (
        <Box
          key={item}
          className=" cursor-pointer "
          onClick={() => {
            goProposalInfo();
          }}>
          <Box sx={{ padding: '25px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #282828', color: '#fff', '&:hover': { border: '1px solid #818994' } }}>
            <Box className="flex justify-between">
              <Box className="flex items-center">
                <Avatar sx={{ width: 18, height: 18, marginRight: '10px' }} src={'avatar'}></Avatar>
                <Box>name</Box>
              </Box>
              <Box sx={{ paddingX: '15px', paddingY: '1px', background: 'green', borderRadius: '20px' }}>active</Box>
            </Box>
            <Box sx={{ paddingY: '10px', fontSize: '26px', wordWrap: 'break-word' }}>title111111111111111111111111111111111111111111111111111111111111111111111111111111111111</Box>
            <Box sx={{ color: '#8b949e', fontSize: '18px', wordWrap: 'break-word' }}>
              contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
            </Box>
            <Box sx={{ paddingY: '10px' }}>time</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default ProposalItem;
