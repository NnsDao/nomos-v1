import { composeQueryKeys } from '../../utils/helpers';

const module = 'nnsdao';

export const nnsdaoKeys = {
  all: composeQueryKeys([{ module }]),
  userInfos: () => composeQueryKeys(nnsdaoKeys.all, { scope: 'userInfo' }),
  userInfo: (principalText: string) => composeQueryKeys(nnsdaoKeys.userInfos(), { principalText }),
  votes: () => composeQueryKeys(nnsdaoKeys.all, { scope: 'vote' }),
  vote: (id: string) => composeQueryKeys(nnsdaoKeys.votes(), { id }),
  member_lists: () => composeQueryKeys(nnsdaoKeys.all, { scope: 'member_lists' }),
  member_list: (cid: string) => composeQueryKeys(nnsdaoKeys.member_lists(), { cid }),
  proposal_lists: () => composeQueryKeys(nnsdaoKeys.all, { scope: 'proposal_lists' }),
  proposal: id => composeQueryKeys(nnsdaoKeys.proposal_lists(), { id }),
};
