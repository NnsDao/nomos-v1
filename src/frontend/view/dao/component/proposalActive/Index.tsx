import { Box } from '@mui/material';
import React from 'react';

const ProposalActive = props => {
  const bgColor = {
    Open: '#2f7d21',
    Rejected: '#c7331d',
    Accepted: '#734916',
    Failed: '',
    Executing: '',
    Succeeded: '',
  };
  return (
    <Box>
      <Box
        sx={{
          paddingX: '15px',
          paddingY: '1px',
          background: bgColor[props.state],
          borderRadius: '20px',
          cursor: 'pointer',
        }}>
        {props.state}
      </Box>
    </Box>
  );
};
export default ProposalActive;
