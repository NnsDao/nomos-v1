import { Box, CircularProgress, Divider } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useMemberList } from '../../../api/nnsdao';
import MemberInfo from './MemberInfo';

export default function MemberList() {
  const { cid = '' } = useParams();
  const memberList = useMemberList(cid);
  if (memberList.isLoading) {
    return (
      <Box key="loading" className="flex justify-center items-center" sx={{ textAlign: 'center' }}>
        <CircularProgress size={24} />
      </Box>
    );
  }

  return (
    <Box sx={{ border: '1px solid #282828', borderRadius: '10px', padding: '8px' }}>
      MemberList
      {memberList.data?.map(member => {
        return (
          <Box key={member.nickname}>
            <Divider sx={{ height: '1px', width: '618px', background: '#282828' }} orientation="vertical" />
            <Box className="flex justify-between items-center" sx={{ lineHeight: 2 }}>
              <MemberInfo avatar={member.avatar} principalID={member?.principal?.toText()}></MemberInfo>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
