import { Avatar, Box } from '@mui/material';
import React from 'react';

export default function info(props) {
  return (
    <Box
      sx={{
        width: 220,
        height: 280,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12px',
        background: '#0C0633',
        border: '1px solid #282828',
        color: '#fff',
        marginRight: '21px',
        marginBottom: '20px',
        '&:hover': { border: '1px solid #818994' },
      }}>
      <Box>
        <Avatar sx={{ width: 82, height: 82 }} src={props.avatar}></Avatar>
      </Box>
      <Box className="text-22 pt-11">{props.name}1</Box>
      <Box sx={{ paddingY: '12px', color: 'gray' }}>{props.member}MEMBER</Box>
      <Box sx={{ paddingX: '40px', paddingY: '8px', cursor: 'pointer', border: '1px solid #282828', borderRadius: '45px', '&:hover': { border: '1px solid #818994' } }}>
        {props.join === 1 ? 'JOIN' : 'Quit'}
      </Box>
    </Box>
  );
}
