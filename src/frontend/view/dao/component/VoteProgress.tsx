import { Principal } from '@dfinity/principal';
import { Box, LinearProgress } from '@mui/material';
import { Votes } from '@nnsdao/nnsdao-kit/src/nnsdao/types';
import React, { useMemo } from 'react';

export default function VoteProgress({ voteData }) {
  const vote = useMemo(() => tempVote(voteData), [voteData]);
  function tempVote(votesResult: Array<[Principal, Votes]>) {
    let totalYes = 0;
    let totalNo = 0;
    votesResult.map(([id, item]) => {
      if ('Yes' in item) {
        totalYes += Number(item.Yes);
      }
      if ('No' in item) {
        totalNo += Number(item.No);
      }
    });
    let total = totalYes + totalNo;

    console.log('yesPercent', totalYes / total);

    function divide(num: number) {
      return `${num}`.replace(/(?=(\B\d{3})+$)/g, ',');
    }
    return {
      total: total,
      yes: divide(totalYes),
      yesPercent: (totalYes / total) * 100,
      no: divide(totalNo),
      noPercent: (totalNo / total) * 100,
    };
  }
  return (
    <Box sx={{ paddingTop: '15px' }}>
      <LinearProgress
        sx={{ border: '5px', marginY: '5px' }}
        variant="determinate"
        value={vote.yesPercent}
        color={'primary'}></LinearProgress>
      <Box className="flex justify-between items-center" sx={{ fontWeight: '700', marginY: '8px' }}>
        <Box>YES {vote.yes} NDP </Box>
        <Box>{vote.yesPercent || 0}%</Box>
      </Box>
      <LinearProgress
        sx={{ border: '5px', marginY: '5px' }}
        variant="determinate"
        value={vote.noPercent}
        color={'primary'}></LinearProgress>
      <Box className="flex justify-between items-center" sx={{ fontWeight: '700', marginY: '5px' }}>
        <Box>NO {vote.no} NDP </Box>
        <Box>{vote.noPercent || 0}%</Box>
      </Box>
    </Box>
  );
}
