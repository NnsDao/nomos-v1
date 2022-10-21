import UpdateIcon from '@mui/icons-material/Update';
import { Alert, AlertColor, Avatar, Box, CircularProgress, Snackbar } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useGetDaoInfo, useGetUserInfo, useJoin, useMemberList, useQuit } from '../../../api/nnsdao/index';
import { nnsdaoKeys } from '../../../api/nnsdao/queries';
import { useUserStore } from '../../../hooks/userStore';
import MemberList from '../component/MemberList';
import About from './about/Index';
// import About from '../newProposal/Index';
import Proposal from './proposal/Index';
import SetUp from './setUp/Index';
import Treasury from './treasury/Index';

const Team = () => {
  const { cid = '' } = useParams();
  const tabList = ['proposal', 'member list', 'new proposal', 'about'];
  const [activeTab, setActiveTab] = useState('proposal');
  const useInfo = useGetUserInfo(cid);
  const joinAction = useJoin(cid);
  const quitAction = useQuit(cid);
  const memberList = useMemberList(cid);
  const daoInfo = useGetDaoInfo(cid);
  const queryClient = useQueryClient();
  const userStore = useUserStore();
  const accountId = userStore.accountId;
  const isLogin = userStore.isLogin;
  const [state, setState] = useState({
    open: false,
    message: '',
    type: 'success',
  });
  const navigate = useNavigate();

  const { open, message, type } = state;
  const handleClick = newState => () => {
    console.log(1);
    setState({ ...newState });
    console.log(2);
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const join = async () => {
    if (!isLogin) {
      navigate('/login');
      return;
    }
    const joinParams = { nickname: accountId, social: [], intro: '', avatar: '' };
    await joinAction.mutateAsync(joinParams);
    handleClick({
      open: true,
      type: 'success',
      message: 'Join success!',
    });
    queryClient.invalidateQueries(nnsdaoKeys.userInfo(cid));
    handleClick({
      open: true,
      type: 'success',
      message: 'Sync success!',
    });
  };
  const quit = async () => {
    //
    if (!isLogin) return;
    await quitAction.mutateAsync();
    handleClick({
      open: true,
      type: 'success',
      message: 'Quit success!',
    });
    queryClient.invalidateQueries(nnsdaoKeys.userInfo(cid));
    handleClick({
      open: true,
      type: 'success',
      message: 'Sync success!',
    });
  };
  const MemberNumber = () => {
    if (memberList.isFetching || memberList.isLoading) {
      return (
        <Box className="flex justify-center items-center" sx={{ textAlign: 'center' }}>
          <CircularProgress size={16} />
        </Box>
      );
    }
    if (memberList.error) {
      return (
        <Box onClick={() => memberList.refetch()}>
          <UpdateIcon />
        </Box>
      );
    }
    return <Box>{memberList.data?.length} MEMBER</Box>;
  };
  const IsGroup = () => {
    if (!isLogin) {
      return <Link to="/login">JOIN</Link>;
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
      <Box>{useInfo.data?.status_code === 1 ? <div onClick={quit}>Quit</div> : <div onClick={join}>JOIN</div>}</Box>
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
          <Avatar sx={{ width: 82, height: 82 }} src={daoInfo.data?.avatar ?? ''}></Avatar>
        </Box>
        <Box className="text-22 pt-11">{daoInfo.data?.name ?? ''}</Box>
        <Box sx={{ paddingY: '12px', color: 'gray' }}>
          <MemberNumber></MemberNumber>
        </Box>
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
          <IsGroup></IsGroup>
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
              onClick={() => {
                if (item === 'new proposal') {
                  navigate('newProposal');
                } else {
                  setActiveTab(item);
                }
              }}
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
        {activeTab === 'proposal' ? <Proposal></Proposal> : null}
        {activeTab === 'member list' ? <MemberList /> : null}
        {activeTab === 'about' ? <About></About> : null}
        {activeTab === 'treasury' ? <Treasury /> : null}
        {activeTab === 'set up' ? <SetUp /> : null}
      </Box>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}>
        <Alert onClose={handleClose} severity={type as AlertColor} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default function DaoTeam() {
  return (
    <>
      <Outlet />
    </>
  );
}

export { Team };
