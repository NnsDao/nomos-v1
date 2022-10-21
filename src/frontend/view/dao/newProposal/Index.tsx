import RichText from '@components/RichText';
import { Principal } from '@dfinity/principal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Backdrop, Box, Button, CircularProgress, Stack, TextField } from '@mui/material';
import { ProposalContent } from '@nnsdao/nnsdao-kit/nnsdao/types';
import { getNICPActor } from '@service';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { usePropose } from '../../../api/nnsdao';

const NewProposal = () => {
  const { cid = '' } = useParams();
  const navigate = useNavigate();
  const proposeAction = usePropose();
  const [snackBarStr, setSnackBarStr] = useState('');
  const [loadingText, setLoadingText] = useState('');
  const goBack = () => {
    navigate(-1);
  };

  const editorRef = useRef([]);

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ];

  const createProposal = async () => {
    // const balanceNICP = await getBalance();
    // const baseNdpCount = 100;
    // if (balanceNICP < baseNdpCount) return;

    setLoadingText('Under authorization...');
    // 1. authorize
    const proposalCost = 1;
    const NICPActor = await getNICPActor(true);
    const approve = await NICPActor.approve(Principal.fromText(cid), BigInt(Number(proposalCost) * 1e8));
    console.log(`approve`, approve);
    // 2. initiate_proposal
    const params: ProposalContent & { cid: string } = {
      title: snackBarStr,
      content: JSON.stringify(editorRef.current),
      end_time: BigInt((Date.now() + 6e4 * 30) * 1e6), // nano seconds
      property: [],
      cid,
    };
    setLoadingText('Under creation...');
    proposeAction.mutate(params, {
      onSuccess(data, variable) {
        navigate(`/daos/team/${cid}`);
      },
      onError(error: any, variables, context) {
        toast.error(error);
      },
      onSettled() {
        setLoadingText('');
      },
    });
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
              sx={{ width: '20px', height: '32px', marginRight: '6px', fontSize: 'large' }}></ArrowBackIcon>
            back
          </Box>
          <Box>
            <Box sx={{ margin: '20px 0' }}>Title</Box>
            <Stack spacing={1} alignItems="start">
              <TextField
                required
                id="title"
                fullWidth
                label="title"
                value={snackBarStr}
                placeholder="Enter Title NewProposal "
                onChange={e => setSnackBarStr(e.target.value)}
              />
            </Stack>
          </Box>
          <Box sx={{ margin: '20px 0' }}>Description (optional)</Box>
          <RichText
            initialValue={initialValue}
            onChange={val => {
              editorRef.current = val;
            }}></RichText>
        </Box>

        <Box className="flex-1">
          <Box sx={{ border: '1px solid #282828', borderRadius: '10px', width: '320px', padding: '24px' }}>
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
              onClick={() => console.log(1)}>
              View Proposal
            </Button>
            <Button
              sx={{
                marginBottom: '20px',
                paddingY: '9px',
                textAlign: 'center',
                fontWeight: '600',
                cursor: 'pointer',
                border: '1px solid #282828',
                borderRadius: '22px',
                color: '#fff',
                width: '100%',
                '&:hover': { border: '1px solid #818994' },
              }}
              onClick={() => console.log(22222222222)}>
              CONTINUE
            </Button>
            <Button
              sx={{
                paddingY: '9px',
                textAlign: 'center',
                fontWeight: '600',
                cursor: 'pointer',
                border: '1px solid #282828',
                borderRadius: '22px',
                color: '#fff',
                width: '100%',
                '&:hover': { border: '1px solid #818994' },
              }}
              onClick={() => createProposal()}>
              Create Proposal
            </Button>
          </Box>
        </Box>
      </Box>
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={!!loadingText}>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <CircularProgress color="inherit" />
          <div>{loadingText}</div>
        </Stack>
      </Backdrop>
      <Toaster></Toaster>
    </Box>
  );
};
export default NewProposal;
