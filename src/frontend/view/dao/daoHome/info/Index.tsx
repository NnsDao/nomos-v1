import { useGetDaoInfo, useGetUserInfo, useJoin, useMemberList, useQuit } from '@api/nnsdao';
import { nnsdaoKeys } from '@api/nnsdao/queries';
import RefreshIcon from '@mui/icons-material/Refresh';
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
  const accountId = userStore.accountId;
  const joinAction = useJoin(cid);
  const quitAction = useQuit(cid);
  const queryClient = useQueryClient();
  const useInfo = useGetUserInfo(cid);
  const daoInfo = useGetDaoInfo(cid);
  const navigate = useNavigate();
  const memberList = useMemberList(cid);

  const join = async e => {
    e.stopPropagation();
    if (!isLogin) {
      navigate('/login');
    }
    const joinParams = { nickname: accountId, social: [], intro: '', avatar: '' };
    joinAction.mutate(joinParams, {
      onSuccess(data) {
        // queryClient.invalidateQueries(nnsdaoKeys.userInfo(cid));
        queryClient.setQueryData(nnsdaoKeys.userInfo(cid), data);
        const memberListKey = nnsdaoKeys.member_list(cid);
        const preList: any[] = queryClient.getQueryData(memberListKey) ?? [];
        queryClient.setQueryData(memberListKey, [...preList, data]);
      },
    });
  };
  const quit = async e => {
    e.stopPropagation();
    if (!isLogin) {
      navigate('/login');
    }
    // @ts-ignore
    quitAction.mutate(null, {
      onSuccess(data) {
        // queryClient.invalidateQueries(nnsdaoKeys.userInfo(cid));
        queryClient.setQueryData(nnsdaoKeys.userInfo(cid), data);
        const memberListKey = nnsdaoKeys.member_list(cid);
        const preList: any[] = queryClient.getQueryData(memberListKey) ?? [];
        queryClient.setQueryData(
          memberListKey,
          preList.filter(item => item.nickname !== data.nickname)
        );
      },
    });
  };

  const IsGroup = () => {
    if (useInfo.isFetching || joinAction.isLoading || quitAction.isLoading) {
      return (
        <Box className="flex justify-center items-center" sx={{ textAlign: 'center' }}>
          <CircularProgress size={24} />
        </Box>
      );
    }
    if (useInfo.error) {
      return (
        <Box onClick={() => useInfo.refetch()}>
          <RefreshIcon />
        </Box>
      );
    }
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
        background: '#000',
        border: '1px solid #282828',
        color: '#fff',
        marginRight: '21px',
        marginBottom: '20px',
        cursor: 'pointer',
        '&:hover': { border: '1px solid #818994' },
      }}>
      <Box>
        {console.log('daoInfo', daoInfo)}
        <Avatar sx={{ width: 82, height: 82 }} src={daoInfo.data?.avatar ?? ''}></Avatar>
      </Box>
      <Box className="text-22 pt-11">{daoInfo.data?.name ?? ''}</Box>
      <Box sx={{ paddingY: '12px', color: 'gray' }}>{memberList.data?.length ?? '*'} MEMBER</Box>
      <IsGroup></IsGroup>
    </Box>
  );
}
