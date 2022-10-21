import { Principal } from '@dfinity/principal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Avatar, Box, Button, CircularProgress, Dialog, DialogActions, Divider, InputBase } from '@mui/material';
import React, { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProposal, useMemberList, useVote } from '../../../api/nnsdao';
import RichText from '../../../components/RichText';
import { useUserStore } from '../../../hooks/userStore';
import { getNICPActor } from '../../../service';
import { principalToAccountIdentifier } from '../../../utils/account';

import ProposalActive from '../component/proposalActive/Index';
import VoteProgress from '../component/VoteProgress';

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
  let principal = userStore.principalId;
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
    const toastID = toast.loading('Awaiting approve...');
    const NICPActor = await getNICPActor(true);
    const approve = await NICPActor.approve(Principal.fromText(cid), BigInt(Number(inputValue) * 1e8));
    console.log('approve', approve);
    toast.loading('Updating...', { id: toastID });
    voteMutation.mutate(
      {
        cid,
        id: BigInt(+id),
        principal: [],
        vote: voteType == 'yes' ? { Yes: BigInt(inputValue) } : { No: BigInt(inputValue) },
      },
      {
        onSuccess(data, variables, context) {
          toast.success('Successfully voted', { id: toastID });
        },
        onError(error: any, variables, context) {
          toast.error(error.toString(), { id: toastID });
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
      <Box key="loading" className="flex justify-center items-center" sx={{ textAlign: 'center' }}>
        <CircularProgress size={24} />
      </Box>
    );
  }

  const MemberInfo = ({ principalID }) => {
    const user = useMemberList(
      cid,
      React.useCallback(data => {
        return data.filter(item => item?.principal?.toText() === principalID);
      }, [])
    );
    let address = principalToAccountIdentifier(principalID, 0);
    address = address.slice(0, 6) + '...' + address.slice(-6);
    return (
      <>
        <Avatar sx={{ width: 18, height: 18, marginX: '10px', cursor: 'pointer' }} src={user.data?.avatar}></Avatar>
        <Box sx={{ cursor: 'pointer' }}>{address}</Box>
      </>
    );
  };
  return (
    <Box key="data">
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
                <MemberInfo
                  key={Proposal.data?.proposer.toText()}
                  principalID={Proposal.data?.proposer.toText()}></MemberInfo>
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
            {Proposal.data?.vote_data.map(([principal, vote]) => (
              <Box key={principal.toText()}>
                <Divider sx={{ height: '1px', width: '618px', background: '#282828' }} orientation="vertical" />
                <Box className="flex justify-between items-center p-14" sx={{ fontWeight: '600' }}>
                  <Box className="flex items-center">
                    {/* <Avatar
                      sx={{ width: 18, height: 18, marginRight: '10px', cursor: 'pointer' }}
                      src={'avatar'}></Avatar>
                    <Box sx={{ cursor: 'pointer' }}>name</Box> */}
                    <MemberInfo key={principal.toText()} principalID={principal.toText()}></MemberInfo>
                  </Box>
                  <Box>{Object.keys(vote || {})?.[0]}</Box>
                  <Box>{Number(Object.values(vote || {})?.[0])} NDP </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="flex-1">
          <Box sx={{ border: '1px solid #282828', borderRadius: '10px', width: '320px' }}>
            <Box sx={{ paddingY: '18px', paddingX: '25px', fontWeight: '900' }}>Information</Box>
            <Divider sx={{ height: '1px', width: '318px', background: '#282828' }} orientation="vertical" />
            <Box sx={{ padding: '24px' }}>
              <Box className="flex justify-between items-center">
                <Box className="py-4 text-gray-500 font-bold">Strategy</Box>
                <Box>0</Box>
              </Box>
              <Box className="flex justify-between items-center">
                <Box className="py-4 text-gray-500 font-bold">Voting system</Box>
                <Box>Basic NDP voting</Box>
              </Box>
              <Box className="flex justify-between items-center">
                <Box className="py-4 text-gray-500 font-bold">Start date</Box>
                <Box>Sep 9, 2022, 9:14 AM</Box>
              </Box>
              <Box className="flex justify-between items-center">
                <Box className="py-4 text-gray-500 font-bold">End date</Box>
                <Box>Sep 20, 2022, 9:14 AM</Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: '1px solid #282828',
              borderRadius: '10px',
              width: '320px',
              marginTop: '50px',
              paddingX: '25px',
            }}>
            <Box sx={{ paddingY: '18px', fontWeight: '900' }}>Vote Result</Box>
            <Divider sx={{ height: '1px', width: '100%', background: '#282828' }} orientation="vertical" />
            <VoteProgress voteData={Proposal.data.vote_data}></VoteProgress>
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
