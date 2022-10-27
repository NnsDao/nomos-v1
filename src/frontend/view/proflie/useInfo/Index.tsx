import { Check } from '@mui/icons-material';
import { Button, CircularProgress, DialogTitle, List, ListItem, ListItemText, Popover } from '@mui/material';
import MuiAvatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { plugLogin, stoicLogin } from '@nnsdao/nnsdao-kit';
import { principalIdToAccountId } from '@nnsdao/nnsdao-kit/helper/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNidInfo } from '../../../api/nid';
import { NIDKeys } from '../../../api/nid/queries';
import copy from '../../../assets/home/copy.png';
import plugIcon from '../../../assets/login/plug.png';
import stoicIcon from '../../../assets/login/stoic.png';
import Avatar from '../../../components/Avatar';
import { useUserStore } from '../../../hooks/userStore';
import { getNIDActor } from '../../../service';
import { getTotalCanisterIdList } from '../../../service/config';

const UseInfo = () => {
  const userStore = useUserStore();
  const nidInfo = useNidInfo();
  const queryClient = useQueryClient();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const bindWalletAction = useMutation(bindWallet, {
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries(NIDKeys.userInfo());
    },
  });
  const accountId = userStore.accountId;
  const principalId = userStore.principalId;
  const [userInfo, setUserInfo] = useState({
    acatar: '',
    nickName: '',
    address: '',
    reputation: '',
    index: '',
  });

  const copyAddress = accountId => {
    navigator.clipboard.writeText(accountId);
    toast.success('The account address has been copied to the clipboard');
  };
  const getCurrentDate = () => {
    const myDate = new Date();
    const year = myDate.getFullYear();
    const month = myDate.getMonth();
    const day = myDate.getDate();
    return year + '/' + (month + 1) + '/' + (day - 1);
  };
  async function bindWallet(type: string): Promise<void> {
    if ((nidInfo.isError, !nidInfo.data)) {
      toast.error('Re-login and try again !');
      return;
    }
    let principalText = '';
    if (type == 'plug') {
      let res = await plugLogin(getTotalCanisterIdList());
      // @ts-ignore
      principalText = res?.principalId;
    } else if (type == 'stoic') {
      let res = await stoicLogin();
      // @ts-ignore
      principalText = res?.principalId;
    }
    const actor = await getNIDActor(true);
    let bindRes = await actor.bind_wallet([nidInfo.data?.nid, type, principalText]);
    if ('Err' in bindRes) {
      toast.error(bindRes.Err);
      return;
    }
    toast.success('Bind success!');
  }

  const LoadingButton = props => {
    const { loading, done, ...other } = props;

    if (done) {
      return (
        <Button {...other} disabled>
          <Check />
        </Button>
      );
    } else if (loading) {
      return (
        <Button {...other}>
          <CircularProgress size={32} />
        </Button>
      );
    } else {
      return <Button {...other} />;
    }
  };
  const anchorID = Boolean(anchorEl) ? 'simple-popover' : undefined;

  return (
    <>
      <div className="account-header">
        <div className="flex">
          <Avatar />

          {/* <div className="account-header-actor"></div> */}
          <div className="account-header-text-wrapper flex items-center flex-col justify-center">
            {nidInfo.data ? (
              nidInfo.data.wallet
                .map(wallet => [...wallet, principalIdToAccountId(wallet[2])])
                .map(wallet => {
                  return (
                    <div
                      key={String(wallet[3])}
                      className="flex justify-between items-center account-header-patrick"
                      onClick={() => copyAddress(String(wallet[3]))}>
                      <span>{String(wallet[1])}&nbsp;</span>
                      <span className=" cursor-pointer ">
                        {String(wallet[3])?.slice(0, 6) + '...' + String(wallet[3])?.slice(16, 20)}
                      </span>
                      <img className="ml-2 cursor-pointer " src={copy} width={'19px'} height={'19px'} alt="" />
                    </div>
                  );
                })
            ) : (
              <div>
                <CircularProgress size={32}></CircularProgress>
                <span>loading wallet</span>
              </div>
            )}

            <div className="account-header-info">
              {/* <span>{`#  ${Math.floor(Number(Number(userInfo.index)))} `} </span> */}
              {/* <span>{userInfo.nickName || 'nickName'} </span> */}
              {/* <img className="ml-6" src={approve} alt="" width={'40px'} height={'40px'} /> */}
            </div>
          </div>
        </div>

        <div className="items-center flex flex-col" style={{ position: 'relative' }} aria-describedby={anchorID}>
          {/* @ts-ignore */}
          <div onClick={handleClick}>
            <LoadingButton className="relative" loading={bindWalletAction.isLoading} variant="outlined">
              Bind wallet
            </LoadingButton>
          </div>
          <Popover
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}>
            <DialogTitle>Bind your wallet</DialogTitle>
            <List sx={{ pt: 0 }}>
              <ListItem
                button
                onClick={() => {
                  handleClose();
                  bindWalletAction.mutate('stoic');
                }}>
                <ListItemAvatar>
                  <MuiAvatar>
                    <img src={stoicIcon} alt="stoic" />
                  </MuiAvatar>
                </ListItemAvatar>
                <ListItemText primary="Stoic" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  handleClose();
                  bindWalletAction.mutate('plug');
                }}>
                <ListItemAvatar>
                  <MuiAvatar>
                    <img src={plugIcon} alt="plug" />
                  </MuiAvatar>
                </ListItemAvatar>
                <ListItemText primary="Plug" />
              </ListItem>
            </List>
          </Popover>
          {/* <img src={reputation} alt="" width="100%" height="" />
        <div className="reputation-text-wrapper">
          <div className="reputation-text">{Math.floor(Number(Number(userInfo.reputation))) || 0}</div>
          <div className="reputation-date">{getCurrentDate()}</div>
        </div> */}
        </div>
        <Toaster></Toaster>
      </div>
    </>
  );
};
export default UseInfo;
