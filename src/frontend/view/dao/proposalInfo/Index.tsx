import { Principal } from '@dfinity/principal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  Divider,
  InputBase,
  LinearProgress,
} from '@mui/material';
import React, { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProposal, useMemberList, useVote } from '../../../api/nnsdao';
import RichText from '../../../components/RichText';
import { useUserStore } from '../../../hooks/userStore';
import { getNICPActor } from '../../../service';
import { principalToAccountIdentifier } from '../../../utils/account';

import ProposalActive from '../component/proposalActive/Index';

const ProposalInfo = () => {
  const navigate = useNavigate();
  const { cid = '', id = '' } = useParams();
  const voteMutation = useVote();
  const Proposal = useGetProposal(cid, id);
  const StructureList = ['1', '2', '3'];
  const [open, setOpen] = React.useState(false);
  const [voteType, setVoteType] = React.useState('');
  const [NDP, setNDP] = React.useState(0);
  const [inputValue, setInput] = React.useState(0);

  const userStore = useUserStore();
  const isLogin = userStore.isLogin;

  const handleClickOpen = string => {
    setVoteType(string);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goLogin = () => {
    navigate('/login', { replace: true });
  };

  const getBalance = async () => {
    const NICPActor = await getNICPActor(true);
    // console.log(NICPActor, 'NICPActor');
    const balanceNICP = await NICPActor.balanceOf(Principal.fromText(principal)).then(r => {
      return r;
    });
    console.log(balanceNICP, 'balanceNICP');
    setNDP((Number(balanceNICP) / 1e8) >> 0);
    // const getBalanceParams = {
    //   token: 'NDP',
    //   user: { address: userStore.accountId },
    // };
    // try {
    //   const NDP = await NdpService.getBalance(getBalanceParams);
    //   setNDP(Number(new BigNumber(NDP.ok.toString()).div(new BigNumber('100000000')).toString()));
    // } catch (error) {
    //   console.error('getBalance', error);
    // }
  };
  let principal = userStore.principalId;

  const confirm = async () => {
    // step
    // 1 isLogin
    // 2 check Balance
    // 2 approve
    // 3 vote
    if (!isLogin) {
      return goLogin();
    }
    if (Number(inputValue) > NDP) {
      toast.error(`You can provide up to your balance ${NDP}`);
      return;
    }

    const NICPActor = await getNICPActor(true);
    const approve = await NICPActor.approve(Principal.fromText(cid), BigInt(Number(inputValue) * 1e8));
    console.log('approve', approve);
    voteMutation.mutate(
      {
        cid,
        id: BigInt(+id),
        principal: [],
        vote: voteType == 'yes' ? { Yes: BigInt(inputValue) } : { No: BigInt(inputValue) },
      },
      {
        onSuccess(data, variables, context) {
          toast.success('Successfully voted');
        },
        onError(error: any, variables, context) {
          toast.error(error.toString());
        },
      }
    );
  };
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    getBalance();
  }, []);

  if (Proposal.isFetching) {
    return (
      <Box className="flex justify-center items-center" sx={{ textAlign: 'center' }}>
        <CircularProgress size={24} />
      </Box>
    );
  }

  const UserBox = () => {
    const proposerPrincipalId = Proposal.data?.proposer.toText();
    const proposerInfo = useMemberList(
      cid,
      React.useCallback(data => {
        return data.filter(item => item?.principal?.toText() === proposerPrincipalId);
      }, [])
    );
    let address = principalToAccountIdentifier(Proposal.data?.proposer.toText(), 0);
    address = address.slice(0, 6) + '...' + address.slice(-6);
    return (
      <>
        <Avatar
          sx={{ width: 18, height: 18, marginX: '10px', cursor: 'pointer' }}
          src={proposerInfo.data?.avatar}></Avatar>
        <Box sx={{ cursor: 'pointer' }}>{address}</Box>
      </>
    );
  };
  return (
    <Box>
      <Box className="flex justify-between pt-10 pb-20 w-1000px">
        <Box sx={{ width: '620px', marginRight: '20px' }}>
          <Box
            sx={{
              color: '#8b949e',
              cursor: 'pointer',
              fontSize: 32,
              '&:hover': {
                color: '#fff',
              },
            }}
            onClick={goBack}>
            <ArrowBackIcon
              sx={{ width: '20px', height: '20px', marginRight: '6px', fontSize: 'large' }}></ArrowBackIcon>
            return
          </Box>
          <Box className="">
            <Box sx={{ paddingY: '15px', fontSize: '26px', wordWrap: 'break-word' }}>{Proposal.data?.title}</Box>
            <Box className="flex justify-between py-20 ">
              <Box className="flex items-center">
                <ProposalActive state={Object.keys(Proposal.data?.proposal_state || {})[0]}></ProposalActive>
                <UserBox key={Proposal.data?.proposer.toText()}></UserBox>
              </Box>
              <Box className="cursor-pointer">
                <Button variant="text">share</Button>
              </Box>
            </Box>
            {/* <Box sx={{ color: '#8b949e', fontSize: '18px', wordWrap: 'break-word' }}></Box> */}
            <RichText initialValue={JSON.parse(Proposal?.data.content)}></RichText>
          </Box>
          <Box sx={{ marginTop: '90px', border: '1px solid #282828', borderRadius: '10px' }}>
            <Box sx={{ paddingY: '18px', paddingX: '25px', fontWeight: '900' }}>Cast Your Vote</Box>
            <Divider sx={{ height: '1px', width: '618px', background: '#282828' }} orientation="vertical" />
            <Box sx={{ padding: '24px' }}>
              <Button
                sx={{
                  paddingY: '9px',
                  textAlign: 'center',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: '1px solid #282828',
                  marginBottom: '20px',
                  borderRadius: '22px',
                  color: '#fff',
                  width: '100%',
                  '&:hover': { border: '1px solid #818994' },
                }}
                onClick={() => handleClickOpen('yes')}>
                Agree
              </Button>

              <Button
                sx={{
                  paddingY: '9px',
                  textAlign: 'center',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: '1px solid #282828',
                  marginBottom: '20px',
                  borderRadius: '22px',
                  color: '#fff',
                  width: '100%',
                  '&:hover': { border: '1px solid #818994' },
                }}
                onClick={() => handleClickOpen('no')}>
                Disagree
              </Button>
            </Box>
          </Box>
          <Box sx={{ marginTop: '90px', border: '1px solid #282828', borderRadius: '10px' }}>
            <Box sx={{ paddingY: '18px', paddingX: '25px', fontWeight: '900' }}>Votes</Box>
            {Proposal.data?.vote_data.map(item => (
              <Box>
                <Divider sx={{ height: '1px', width: '618px', background: '#282828' }} orientation="vertical" />
                <Box className="flex justify-between items-center p-14" sx={{ fontWeight: '600' }}>
                  <Box className="flex items-center">
                    <Avatar
                      sx={{ width: 18, height: 18, marginRight: '10px', cursor: 'pointer' }}
                      src={'avatar'}></Avatar>
                    <Box sx={{ cursor: 'pointer' }}>name</Box>
                  </Box>
                  <Box>FOR Structure/AGAINST Structure</Box>
                  <Box>xxx NDP </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="flex-1">
          <Box sx={{ border: '1px solid #282828', borderRadius: '10px', width: '320px' }}>
            <Box sx={{ paddingY: '18px', paddingX: '25px', fontWeight: '900' }}>information</Box>
            <Divider sx={{ height: '1px', width: '318px', background: '#282828' }} orientation="vertical" />
            <Box sx={{ padding: '24px' }}>
              <Box className="flex justify-between items-center">
                <Box className="py-4 text-gray-500 font-bold">Strategy</Box>
                <Box>0</Box>
              </Box>
              <Box className="flex justify-between items-center">
                <Box className="py-4 text-gray-500 font-bold">IPFS</Box>
                <Box>1</Box>
              </Box>
              <Box className="flex justify-between items-center">
                <Box className="py-4 text-gray-500 font-bold">voting system</Box>
                <Box>2</Box>
              </Box>
              <Box className="flex justify-between items-center">
                <Box className="py-4 text-gray-500 font-bold">start date</Box>
                <Box>3</Box>
              </Box>
              <Box className="flex justify-between items-center">
                <Box className="py-4 text-gray-500 font-bold">end date</Box>
                <Box>4</Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ border: '1px solid #282828', borderRadius: '10px', width: '320px', marginTop: '50px' }}>
            <Box sx={{ paddingY: '18px', paddingX: '25px', fontWeight: '900' }}>current results</Box>
            <Divider sx={{ height: '1px', width: '318px', background: '#282828' }} orientation="vertical" />
            <Box sx={{ padding: '24px' }}>
              <Box sx={{ fontWeight: '700' }}>
                FOR Structure {0}K NDP {100}%
              </Box>
              <LinearProgress
                sx={{ border: '5px', marginY: '10px' }}
                variant="determinate"
                value={80}
                color={'primary'}></LinearProgress>
              <Box sx={{ fontWeight: '700', marginY: '10px' }}>
                AGAINST Structure {0}K NDP {0}%
              </Box>
              <LinearProgress
                sx={{ border: '5px', marginY: '10px' }}
                variant="determinate"
                value={80}
                color={'primary'}></LinearProgress>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ width: '450px', padding: '20px', margin: '0 auto', background: '#0C0633' }}>
          <Box sx={{ paddingY: '10px', textAlign: 'center' }}>Polling overview</Box>
          <Box>
            <Box className="flex justify-between items-center">
              <Box>Options: </Box>
              <Box>{voteType.toUpperCase()}</Box>
            </Box>
            <Box className="flex justify-between items-center" sx={{ lineHeight: 2 }}>
              <Box>Vote Weights: </Box>
              <Box>
                <InputBase
                  sx={{ border: '1px solid #282828', '&:hover': { border: '1px solid #818994' }, padding: '8px' }}
                  type="number"
                  onChange={e => setInput(parseInt(e.target.value) ?? 0)}></InputBase>{' '}
                NDP
              </Box>
            </Box>
            {/* <Box>
              <InputBase
                onChange={e => setInput(e.target.value)}
                sx={{ ml: 1, flex: 1, color: '#fff', marginLeft: '0px' }}
                placeholder="Search for dao of interest"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
            </Box> */}
          </Box>

          <DialogActions sx={{ marginTop: '20px' }}>
            <Button variant="outlined" onClick={confirm}>
              Confirm
            </Button>
            <Button variant="outlined" onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
      <Toaster></Toaster>
    </Box>
  );
};

export default ProposalInfo;
