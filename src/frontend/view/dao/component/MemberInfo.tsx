import { Avatar, Box } from '@mui/material';
import React from 'react';
import { principalToAccountIdentifier } from '../../../utils/account';

export default function ({ principalID, avatar }) {
  let address = principalToAccountIdentifier(principalID, 0);
  address = address.slice(0, 6) + '...' + address.slice(-6);
  return (
    <>
      <Avatar sx={{ width: 18, height: 18, marginX: '10px', cursor: 'pointer' }} src={avatar}></Avatar>
      <Box sx={{ cursor: 'pointer' }}>{address}</Box>
    </>
  );
}
