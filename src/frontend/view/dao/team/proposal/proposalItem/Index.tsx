import UpdateIcon from '@mui/icons-material/Update';
import { Avatar, Box, CircularProgress, LinearProgress } from '@mui/material';
import React from 'react';
import { principalToAccountIdentifier } from '../../../../../utils/account';

import { Principal } from '@dfinity/principal';
import { Votes } from '@nnsdao/nnsdao-kit/src/nnsdao/types';
import { useGetProposalList } from '../../../../../api/nnsdao';
import ProposalActive from '../../../component/proposalActive/Index';
const ProposalItem = () => {
  const Proposal = useGetProposalList();

  const goProposalInfo = () => {
    console.log('goProposalInfo');
  };

  const tempAdd = (principal: Principal) => {
    const add = principalToAccountIdentifier(principal.toText(), 0);
    const reserved = 6;
    return add.slice(0, reserved) + '.....' + add.slice(add.length - reserved, add.length);
  };
  const tempVote = (votesResult: Array<[Principal, Votes]>) => {
    let totalYes = 0;
    let totalNo = 0;
    votesResult.map(item => {
      if ('Yes' in item[1]) {
        totalYes += Number(item[1].Yes);
      }
      if ('No' in item[1]) {
        totalNo += Number(item[1].No);
      }
    });
    let total = totalYes + totalNo;

    console.log('yesPercent', totalYes / total);

    return {
      total: total,
      yes: totalYes / 1e4,
      yesPercent: totalYes / total,
      no: totalNo / 1e4,
      noPercent: totalNo / total,
    };
  };

  const TotalList = () => {
    if (Proposal.isFetching || Proposal.isLoading || Proposal.isLoading) {
      return (
        <Box className="flex justify-center items-center" sx={{ textAlign: 'center' }}>
          <CircularProgress size={24} />
        </Box>
      );
    }
    if (Proposal.error) {
      return (
        <Box onClick={() => Proposal.refetch()}>
          <UpdateIcon />
        </Box>
      );
    }
    return (
      <Box>
        {Proposal.data.map(item => (
          <Box
            key={item}
            className=" cursor-pointer "
            onClick={() => {
              goProposalInfo();
            }}>
            <Box
              sx={{
                padding: '25px',
                marginBottom: '20px',
                borderRadius: '10px',
                border: '1px solid #282828',
                color: '#fff',
                '&:hover': { border: '1px solid #818994' },
              }}>
              <Box className="flex justify-between">
                <Box className="flex items-center">
                  <Avatar sx={{ width: 18, height: 18, marginRight: '10px' }} src={'avatar'}>
                    //todo
                  </Avatar>
                  <Box>{tempAdd(item[1].proposer)}</Box>
                  <Box sx={{ marginLeft: '10px' }}>id:&nbsp;{Number(item[0])}</Box>
                </Box>
                <ProposalActive state={Object.keys(item[1].proposal_state)[0]}></ProposalActive>
              </Box>
              <Box sx={{ paddingY: '10px', fontSize: '26px', wordWrap: 'break-word' }}>{item[1].title}</Box>
              <Box sx={{ color: '#8b949e', fontSize: '18px', wordWrap: 'break-word' }}>{item[1].content}</Box>
              <Box sx={{ paddingTop: '15px' }}>
                <LinearProgress
                  sx={{ border: '5px', marginY: '5px' }}
                  variant="determinate"
                  value={tempVote(item[1].vote_data).yesPercent}
                  color={'primary'}></LinearProgress>
                <Box className="flex justify-between items-center" sx={{ fontWeight: '700', marginY: '8px' }}>
                  <Box> FOR Structure {tempVote(item[1].vote_data).yes} K NDP </Box>
                  <Box>{tempVote(item[1].vote_data).yesPercent || 0}%</Box>
                </Box>
                <LinearProgress
                  sx={{ border: '5px', marginY: '5px' }}
                  variant="determinate"
                  value={tempVote(item[1].vote_data).noPercent}
                  color={'primary'}></LinearProgress>
                <Box className="flex justify-between items-center" sx={{ fontWeight: '700', marginY: '5px' }}>
                  <Box>AGAINST Structure {tempVote(item[1].vote_data).no} K NDP </Box>
                  <Box>{tempVote(item[1].vote_data).noPercent || 0}%</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    );
  };
  return <TotalList></TotalList>;
};
export default ProposalItem;
