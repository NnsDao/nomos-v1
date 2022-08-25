import { Box } from '@mui/material';
import React from 'react';

const ProposalActive = props => {
  const bgColor = {
    active: '#4CB275',
    started: '#be4e4d',
    closed: '#734915',
  };
  return (
    <Box>
      <Box sx={{ paddingX: '15px', paddingY: '1px', background: bgColor[props.state], borderRadius: '20px', cursor: 'pointer' }}>active</Box>
    </Box>
  );
};
export default ProposalActive;
