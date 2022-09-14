import { composeQueryKeys } from '../../utils/helpers';

const module = 'nnsdao';

export const nnsdaoKeys = {
  all: composeQueryKeys([{ module }]),
  userInfos: () => composeQueryKeys(nnsdaoKeys.all, { scope: 'userInfo' }),
  userInfo: (cid: string) => composeQueryKeys(nnsdaoKeys.userInfos(), { cid }),
  daoInfos: () => composeQueryKeys(nnsdaoKeys.all, { scope: 'daoInfo' }),
  daoInfo: (cid: string) => composeQueryKeys(nnsdaoKeys.daoInfos(), { cid }),
  votes: () => composeQueryKeys(nnsdaoKeys.all, { scope: 'vote' }),
  vote: (id: string) => composeQueryKeys(nnsdaoKeys.votes(), { id }),
  member_lists: () => composeQueryKeys(nnsdaoKeys.all, { scope: 'member_lists' }),
  member_list: (cid: string) => composeQueryKeys(nnsdaoKeys.member_lists(), { cid }),
  proposal_lists: cid => composeQueryKeys(nnsdaoKeys.all, { scope: 'proposal_lists', cid }),
  proposal: (cid, id) => composeQueryKeys(nnsdaoKeys.proposal_lists(cid), { id }),
};
