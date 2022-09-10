import { useGetUserInfo, useJoin, useQuit } from '@api/nnsdao';
import { nnsdaoKeys } from '@api/nnsdao/queries';
import { Avatar, Box, CircularProgress } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../../hooks/userStore';

export default function info(props) {
  let { id, canister_id } = props.data;
  const cid = canister_id.toText();
  const userStore = useUserStore();
  const isLogin = userStore.isLogin;
  const accountId = window.localStorage.getItem('accountId')!;
  const joinAction = useJoin();
  const quitAction = useQuit();
  const queryClient = useQueryClient();
  const useInfo = useGetUserInfo(cid);
  const navigate = useNavigate();

  const join = async () => {
    if (!isLogin) {
      navigate('/login');
    }
    const joinParams = { nickname: accountId, social: [], intro: '', avatar: '' };
    await joinAction.mutateAsync(joinParams);
    queryClient.invalidateQueries(nnsdaoKeys.userInfo());
  };
  const quit = async () => {
    if (!isLogin) {
      navigate('/login');
    }
    await quitAction.mutateAsync();
    queryClient.invalidateQueries(nnsdaoKeys.userInfo());
  };

  const IsGroup = () => {
    if (!isLogin) {
      return (
        <Box
          onClick={() => {
            navigate('/login');
          }}>
          JOIN
        </Box>
      );
    }

    if (useInfo.isFetching || joinAction.isLoading || quitAction.isLoading) {
      return (
        <Box className="flex justify-center items-center" sx={{ textAlign: 'center' }}>
          <CircularProgress size={24} />
        </Box>
      );
    }
    // if (useInfo.error) {
    //   return (
    //     <Box onClick={() => useInfo.refetch()}>
    //       <UpdateIcon />
    //     </Box>
    //   );
    // }
    return (
      <Box>
        {useInfo.data?.status_code === 1 ? (
          <Box
            onClick={quit}
            sx={{
              paddingX: '40px',
              paddingY: '8px',
              cursor: 'pointer',
              border: '1px solid #282828',
              borderRadius: '45px',
              '&:hover': { border: '1px solid #818994' },
            }}>
            Quit
          </Box>
        ) : (
          <Box
            onClick={join}
            sx={{
              paddingX: '40px',
              paddingY: '8px',
              cursor: 'pointer',
              border: '1px solid #282828',
              borderRadius: '45px',
              '&:hover': { border: '1px solid #818994' },
            }}>
            JOIN
          </Box>
        )}
      </Box>
    );
  };
  const jumpToDao = () => {
    const cid = props.data.canister_id.toText();
    console.log('cid', props);
    navigate(`/daos/team/${cid}`);
  };
  return (
    <Box
      onClick={jumpToDao}
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
        cursor: 'pointer',
        '&:hover': { border: '1px solid #818994' },
      }}>
      <Box>
        <Avatar sx={{ width: 82, height: 82 }} src={props.avatar}></Avatar>
      </Box>
      <Box className="text-22 pt-11">{props.name}1</Box>
      <Box sx={{ paddingY: '12px', color: 'gray' }}>{props.member}MEMBER</Box>
      <IsGroup></IsGroup>
      {/* <Box
        onClick={() => handleDao(props.join)}
        sx={{
          paddingX: '40px',
          paddingY: '8px',
          cursor: 'pointer',
          border: '1px solid #282828',
          borderRadius: '45px',
          '&:hover': { border: '1px solid #818994' },
        }}>
        {props.join === 1 ? 'Quit' : 'JOIN'}
      </Box> */}
    </Box>
  );
}
