import UpdateIcon from '@mui/icons-material/Update';
import { Avatar, Box, CircularProgress } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useGetUserInfo, useJoin, useQuit } from '../../../api/nnsdao/index';
import { nnsdaoKeys } from '../../../api/nnsdao/queries';
import Proposal from './proposal/Index';
const Team = () => {
  const accountId = window.localStorage.getItem('accountId')!;
  const tabList = ['proposal', 'new proposal', 'about', 'treasury', 'set up'];
  const [activeTab, setActiveTab] = useState('proposal');
  const useInfo = useGetUserInfo();
  const joinAction = useJoin();
  const quitAction = useQuit();
  const [status_code, setStatusCode] = useState(0);
  const isLogin = Boolean(Number(window.localStorage.getItem('isLogin')));
  const queryClient = useQueryClient();

  const join = () => {
    const joinParams = { nickname: accountId, social: [], intro: '', avatar: '' };
    joinAction.mutate(joinParams);
    queryClient.invalidateQueries(nnsdaoKeys.userInfo());

    // refetch
    // useInfo.refetch();
  };
  const quit = () => {
    //
    quitAction.mutate();
    queryClient.invalidateQueries(nnsdaoKeys.userInfo());
  };
  const GetUserInfo = () => {
    if (useInfo.isFetching) {
      return (
        <Box className="flex justify-center items-center" sx={{ textAlign: 'center' }}>
          <CircularProgress size={24} />
        </Box>
      );
    }
    if (useInfo.error) {
      return (
        <Box onClick={() => useInfo.refetch()}>
          <UpdateIcon />
        </Box>
      );
    }

    // return <Box>{/* {getJoinStatus.data.Ok.status_code} */}1</Box>;
    return (
      <Box>{useInfo.data.status_code === 1 ? <div onClick={quit}>Quit</div> : <div onClick={join}>JOIN</div>}</Box>
    );
  };
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
            textAlign: 'center',
            background: '#2e54f6',
            borderRadius: '45px',
            fontWeight: '500',
            '&:hover': { background: '#2e54d1' },
          }}>
          <GetUserInfo></GetUserInfo>
          {/* status_code */}
          {/* {1 === 1 ? 'JOIN' : 'Quit'} */}
          {/* {status_code === 1 ? (
            <Box className="flex justify-center items-center" sx={{ textAlign: 'center' }} onClick={quit}>
              Quit
            </Box>
          ) : (
            <Box className="flex justify-center items-center" sx={{ textAlign: 'center' }} onClick={join}>
              JOIN
            </Box>
          )} */}
        </Box>
        <Box sx={{ marginY: '20px' }}>
          {tabList.map(item => (
            <Box
              onClick={() => setActiveTab(item)}
              key={item}
              sx={{
                width: 230,
                paddingY: '8px',
                paddingLeft: '26px',
                cursor: 'pointer',
                transition: '150ms',
                fontWeight: '500',
              }}
              className={activeTab === item ? 'border-solid border-l-2 border-light-blue-500' : ''}>
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      <Box className=" max-w-700 ml-265px">
        <Proposal></Proposal>
      </Box>
      {/* <ProposalInfo></ProposalInfo> */}
    </Box>
  );
};
export default Team;
