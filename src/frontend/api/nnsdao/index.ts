import type { DaoInfo, JoinDaoParams, ProposalContent, UserVoteArgs } from '@nnsdao/nnsdao-kit/nnsdao/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { getNnsdaoActor } from '../../service';
import { nnsdaoKeys } from './queries';

export const get_proposal = async ({ queryKey }) => {
  const { module, cid, id, scope } = queryKey[0];
  const actor = await getNnsdaoActor(cid, false);
  const res = await actor.get_proposal(id);
  console.log('get_proposal', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
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
  // can also get someone other than caller`s user info
  const res = await actor.user_info([]);
  console.log('user_info', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return null;
};

export const getProposalList = async ({ queryKey }) => {
  const { module, scope, cid } = queryKey[0];
  const actor = await getNnsdaoActor(cid, false);
  const res = await actor.get_proposal_list();
  console.log(res, 'get_proposal_list');
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(res.Err);
};

/**
 *
 *  Hooks
 */

export const useGetProposalList = (cid: string, selector?: (data) => any) => {
  const defaultSelector = data => data;
  const queryClient = useQueryClient();
  return useQuery(nnsdaoKeys.proposal_lists(cid), getProposalList, {
    staleTime: 6e4,
    select: selector || defaultSelector,
  });
};

export const useGetProposal = (cid: string, id: string) => {
  const queryClient = useQueryClient();
  const listKey = nnsdaoKeys.proposal_lists(cid);
  return useQuery(
    nnsdaoKeys.proposal(cid, id),
    async ({ queryKey }) => {
      // const { module, scope } = queryKey[0];
      const actor = await getNnsdaoActor(cid, false);
      const res = await actor.get_proposal(BigInt(+id));
      console.log(res, 'get_proposal');
      if ('Ok' in res) {
        return res.Ok;
      }
      return Promise.reject(res.Err);
    },
    {
      staleTime: 6e4,
      initialData: () => {
        const list: any[] = queryClient.getQueryData(listKey) ?? [];
        let item = list.find(([ID]) => ID == id);
        if (item) {
          return item[1];
        }
      },
      initialDataUpdatedAt() {
        return queryClient.getQueryState(listKey)?.dataUpdatedAt;
      },
      onSuccess(data) {
        const preList: any[] = queryClient.getQueryData(listKey) ?? [];
        if (!preList.length) return;
        // console.log('preList', preList, data);
        const index = preList.findIndex(([id, item]) => data.id === id);

        queryClient.setQueryData(
          listKey,
          preList
            .slice(0, index)
            .concat([[data.id, data]])
            .concat(preList.slice(index + 1))
        );
      },
    }
  );
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

export const useVote = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (params: UserVoteArgs & { cid: string }) => {
      const actor = await getNnsdaoActor(params.cid, true);
      const res = await actor.vote(params);
      console.log('vote', res);
      if ('Ok' in res) {
        return res.Ok;
      }
      return Promise.reject(res.Err);
    },
    {
      onSuccess(data, variables) {
        const { cid, id } = variables;
        // const queryKey = nnsdaoKeys.proposal_lists(cid);
        queryClient.invalidateQueries(nnsdaoKeys.proposal(cid, String(Number(id))));
      },
    }
  );
};
export const useQuit = (cid: string) => {
  return useMutation(() => {
    return quit(cid);
  });
};

export const useMemberList = (cid: string, selector?: (data) => any) => {
  const defaultSelector = React.useCallback(data => data, []);
  return useQuery(nnsdaoKeys.member_list(cid), member_list, {
    staleTime: 6e4,
    select: selector || defaultSelector,
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
      const actor = await getNnsdaoActor(params.cid, true);
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

export const usePropose = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (params: ProposalContent & { cid: string }) => {
      const actor = await getNnsdaoActor(params.cid, true);
      const res = await actor.propose(params);
      console.log('propose', res);
      if ('Ok' in res) {
        return res.Ok;
      }
      return Promise.reject(res.Err);
    },
    {
      onSuccess(data, variables) {
        const cid = variables.cid;
        const queryKey = nnsdaoKeys.proposal_lists(cid);
        const preList = queryClient.getQueryData(queryKey) ?? [];
        // @ts-ignore
        queryClient.setQueryData(queryKey, preList.concat([[data.id, data]]));
      },
    }
  );
};
