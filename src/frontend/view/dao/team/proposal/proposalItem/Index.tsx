import UpdateIcon from '@mui/icons-material/Update';
import { Avatar, Box, CircularProgress } from '@mui/material';
import React from 'react';
import { principalToAccountIdentifier } from '../../../../../utils/account';

import { Principal } from '@dfinity/principal';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProposalList, useMemberList } from '../../../../../api/nnsdao';
import RichText from '../../../../../components/RichText';
import ProposalActive from '../../../component/proposalActive/Index';
import VoteProgress from '../../../component/VoteProgress';

const ProposalItem = props => {
  let { filter = '' } = props;
  const filterStr = /all/i.test(filter) ? '' : filter;
  const { cid = '' } = useParams();
  const Proposal = useGetProposalList(cid, data =>
    data.filter(([, item]) => new RegExp(filterStr).test(Object.keys(item.proposal_state)[0]))
  );
  const navigate = useNavigate();

  const goProposalInfo = (id: number) => {
    navigate(`proposalInfo/${id}`);
  };

  const tempAdd = (principal: Principal) => {
    const add = principalToAccountIdentifier(principal.toText(), 0);
    const reserved = 6;
    return add.slice(0, reserved) + '...' + add.slice(add.length - reserved, add.length);
  };

  const UserBox = props => {
    const { data } = props;
    const proposerPrincipalId = data.proposer.toText();
    const proposerInfo = useMemberList(
      cid,
      React.useCallback(data => {
        return data.filter(item => item?.principal?.toText() === proposerPrincipalId);
      }, [])
    );
    return (
      <Box className="flex items-center">
        <Avatar sx={{ width: 18, height: 18, marginRight: '10px' }} src={proposerInfo.data?.avatar}></Avatar>
        <Box>{tempAdd(data.proposer)}</Box>
        <Box sx={{ marginLeft: '10px' }}>ID:&nbsp;{Number(data.id)}</Box>
      </Box>
    );
  };

  if (Proposal.isFetching) {
    return (
      <Box className="flex justify-center items-center" sx={{ textAlign: 'center' }}>
        <CircularProgress size={24} />
      </Box>
    );
  }
  if (Proposal.error || !Proposal.data?.length) {
    return (
      <Box onClick={() => Proposal.refetch()} sx={{ textAlign: 'center', cursor: 'pointer' }}>
        <div>refresh</div>
        <UpdateIcon fontSize="large" />
      </Box>
    );
  }

  return (
    <Box>
      {Proposal.data?.map(([, item]) => (
        <Box
          key={Number(item.id)}
          className=" cursor-pointer "
          onClick={() => {
            goProposalInfo(Number(item.id));
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
              <UserBox key={item.id} data={item}></UserBox>
              <ProposalActive state={Object.keys(item.proposal_state)[0]}></ProposalActive>
            </Box>
            <Box sx={{ paddingY: '10px', fontSize: '26px', wordWrap: 'break-word' }}>{item.title}</Box>
            {/* <Box sx={{ color: '#8b949e', fontSize: '18px', wordWrap: 'break-word' }}>{item.content}</Box> */}
            <RichText initialValue={JSON.parse(item.content)}></RichText>
            <VoteProgress voteData={item.vote_data}></VoteProgress>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default ProposalItem;
