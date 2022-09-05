import RichText from '@components/RichText';
import { Principal } from '@dfinity/principal';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Button, Stack, TextField } from '@mui/material';
import { getNICPActor, getNnsdaoActor } from '@service';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewProposal = () => {
  const navigate = useNavigate();
  const [snackBarStr, setSnackBarStr] = useState('');

  const goBack = () => {
    navigate(-1);
  };
  const onEnterTag = e => {
    if (e.code === 'Enter') {
      setSnackBarStr(e.target.value);
    }
  };
  const editorRef = useRef([]);

  const initialValue = [
    {
      type: 'paragraph',
      children: [
        // { text: 'This is editable ' },
        // { text: 'rich', bold: true },
        // { text: ' text, ' },
        // { text: 'much', italic: true },
        // { text: ' better than a ' },
        // { text: '<textarea>', code: true },
        { text: '' },
      ],
    },
    // {
    //   type: 'paragraph',
    //   children: [
    //     {
    //       text: "Since it's rich text, you can do things like turn a selection of text ",
    //     },
    //     { text: 'bold', bold: true },
    //     {
    //       text: ', or add a semantically rendered block quote in the middle of the page, like this:',
    //     },
    //   ],
    // },
    // {
    //   type: 'block-quote',
    //   children: [{ text: 'A wise quote.' }],
    // },
    // {
    //   type: 'paragraph',
    //   align: 'center',
    //   children: [{ text: 'Try it out for yourself!' }],
    // },
  ];

  const createProposal = async () => {
    // const balanceNICP = await getBalance();
    // const baseNdpCount = 100;
    // if (balanceNICP < baseNdpCount) return;

    // 1. authorize
    const proposalCost = 1;
    const NICPActor = await getNICPActor(true);
    const approve = await NICPActor.approve(
      Principal.fromText('67bzx-5iaaa-aaaam-aah5a-cai'),
      BigInt(Number(proposalCost) * 1e8)
    );
    console.log(`approve`, approve);
    // 2. initiate_proposal
    const res = await getNnsdaoActor(true).then(actor =>
      actor.propose({
        title: snackBarStr,
        content: JSON.stringify(editorRef.current),
        end_time: BigInt((Date.now() + 3e5) * 1e6),
        property: [],
      })
    );
    console.log(res);
  };
  return (
    <Box>
      <Box className="flex justify-between pt-10 pb-20 w-1000px">
        <Box sx={{ width: '620px', marginRight: '20px' }}>
          <Box sx={{ color: '#8b949e', cursor: 'pointer' }} onClick={goBack}>
            <KeyboardBackspaceIcon sx={{ width: '20px', height: '20px', marginRight: '6px' }}></KeyboardBackspaceIcon>
            return
          </Box>
          <Box>
            <Box sx={{ margin: '20px 0' }}>title</Box>
            <Stack spacing={1} alignItems="start">
              <TextField
                required
                id="title"
                fullWidth
                label="title"
                value={snackBarStr}
                placeholder="Enter Title NewProposal "
                onKeyDown={e => onEnterTag(e)}
                onChange={e => setSnackBarStr(e.target.value)}
              />
            </Stack>
          </Box>
          <Box sx={{ margin: '20px 0' }}>description (optional)</Box>
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
              continue
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
              New Proposal
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default NewProposal;
