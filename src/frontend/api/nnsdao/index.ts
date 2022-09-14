import type { DaoInfo, JoinDaoParams } from '@nnsdao/nnsdao-kit/nnsdao/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getNnsdaoActor } from '../../service';
import { nnsdaoKeys } from './queries';

export const get_handled_proposal = async ({ queryKey }) => {
  const { cid, module, scope } = queryKey[0];
  const actor = await getNnsdaoActor(cid, false);
  try {
    const res = await actor.get_handled_proposal();
    console.log('get_handled_proposal', res);
    return res;
  } catch (error) {
    console.log('get_handled_proposal', error);
    return Promise.reject(null);
  }
};

export const get_proposal = async ({ queryKey }) => {
  const { module, cid, id, scope } = queryKey[0];
  const actor = await getNnsdaoActor(cid, false);
  try {
    const res = await actor.get_proposal(id);
    console.log('get_proposal', res);
    return res;
  } catch (error) {
    console.log('get_proposal', error);
    return Promise.reject(null);
  }
};
export const join = async (params: JoinDaoParams & { cid: string }) => {
  const actor = await getNnsdaoActor(params.cid, true);
  Reflect.deleteProperty(params, 'cid');
  const res = await actor.join(params);
  console.log('join', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
};
export const member_list = async ({ queryKey }) => {
  const { cid } = queryKey[0];
  const actor = await getNnsdaoActor(cid, false);
  const res = await actor.member_list();
  console.log('member_list', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
};
export const propose = async ({ queryKey }) => {
  const { module, scope } = queryKey[0];
  const actor = await getNnsdaoActor(false);
  try {
    const res = await actor.propose();
    console.log('propose', res);
    return res;
  } catch (error) {
    console.log('propose', error);
    return Promise.reject(null);
  }
};
export const quit = async (cid: string) => {
  const actor = await getNnsdaoActor(cid, false);
  const res = await actor.quit();
  console.log('quit', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
};
export const getDaoInfo = async ({ queryKey }) => {
  const { module, scope, cid } = queryKey[0];
  const actor = await getNnsdaoActor(cid, false);
  const res = await actor.dao_info();
  console.log('dao_info', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
};
export const user_info = async ({ queryKey }) => {
  const { module, scope, cid } = queryKey[0];

  if (!cid) {
    return Promise.reject(null);
  }
  const actor = await getNnsdaoActor(cid, true);
  const res = await actor.user_info();
  console.log('user_info', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
};
export const vote = async params => {
  const actor = await getNnsdaoActor(true);
  try {
    const res = await actor.vote(params);
    console.log('vote', res);
    return res;
  } catch (error) {
    console.log('vote', error);
    return Promise.reject(null);
  }
};

export const getProposalList = async () => {
  const actor = await getNnsdaoActor(false);
  const res = await actor.get_proposal_list();
  console.log(res, 'get_proposal_list');
  try {
    if ('Ok' in res) {
      return res.Ok;
    } else {
      return Promise.reject(null);
    }
  } catch (error) {
    console.log('get_proposal_list', error);
    return [];
  }
};

/**
 *
 *  Hooks
 */

export const useGetProposalList = (cid: string) => {
  return useQuery(nnsdaoKeys.proposal_lists(cid), getProposalList);
};

export const useGetUserInfo = (cid: string) => {
  return useQuery(nnsdaoKeys.userInfo(cid), user_info, {
    staleTime: Infinity,
  });
};

export const useGetDaoInfo = (cid: string) => {
  return useQuery(nnsdaoKeys.daoInfo(cid), getDaoInfo, {
    staleTime: Infinity,
  });
};

export const useVote = (cid: string) => {
  return useQuery(nnsdaoKeys.vote(), vote);
};
export const useQuit = (cid: string) => {
  return useMutation(() => {
    return quit(cid);
  });
};
export const usePropose = () => {
  return useQuery(nnsdaoKeys.propose(), propose);
};
export const useMemberList = (cid: string) => {
  return useQuery(nnsdaoKeys.member_list(cid), member_list, {
    staleTime: 6e4,
  });
};
export const useJoin = (cid: string) => {
  return useMutation((params: JoinDaoParams) => {
    return join({ ...params, cid });
  });
};

export const useUpdateDaoInfo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (params: DaoInfo & { cid: string }) => {
      const actor = await getNnsdaoActor(params.cid, false);
      const res = await actor.update_dao_info(params);
      console.log(res, 'update_dao_info');
      if ('Ok' in res) {
        return res.Ok;
      }
      return Promise.reject(null);
    },
    {
      onSuccess(data, variables) {
        queryClient.setQueryData(nnsdaoKeys.daoInfo(variables.cid), data);
      },
    }
  );
};

export const useGetProposal = () => {
  return useQuery(nnsdaoKeys.proposal(id), get_proposal);
};
export const useGetHandledProposal = () => {
  return useQuery(nnsdaoKeys.get_handled_proposal(), get_handled_proposal);
};
