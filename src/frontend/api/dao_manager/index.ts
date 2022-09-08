import type { CreateDaoInfo } from '@nnsdao/nnsdao-kit/dao_manager/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getDaoManagerActor } from '../../service';
import { daoManagerKeys } from './queries';

export const totalDaoList = async ({ queryKey }) => {
  const { module, scope } = queryKey[0];
  const actor = await getDaoManagerActor(false);
  try {
    const res = await actor.dao_list();
    console.log('dao_list', res);
    return res;
  } catch (error) {
    console.log('dao_list', error);
    return Promise.reject(null);
  }
};

export const daoStatus = async ({ queryKey }) => {
  const { module, scope, cid } = queryKey[0];
  const actor = await getDaoManagerActor(false);
  try {
    const res = await actor.dao_status(cid);
    console.log('dao_status', res);
    return res;
  } catch (error) {
    console.log('dao_status', error);
    return Promise.reject(null);
  }
};

export const getPayInfo = async () => {
  // const { module, scope, cid } = queryKey[0];
  const actor = await getDaoManagerActor(true);
  const res = await actor.get_pay_info();
  console.log('get_pay_info', res);
  if ('Err' in res) {
    return Promise.reject(res.Err);
  }
  return res.Ok;
};

export async function createDao(params: CreateDaoInfo) {
  const actor = await getDaoManagerActor(true);
  const res = await actor.create_dao(params);
  if ('Err' in res) {
    return Promise.reject(res.Err);
  }
  // res.Ok.canister_id = res.Ok.canister_id.toText();
  // res.Ok.controller = res.Ok.controller.map(principal => principal.toText());
  // res.Ok.owner = res.Ok.owner.toText();
  return res.Ok;
}

/**
 *  Hooks
 *
 */

export const useTotalDaoLists = () => {
  return useQuery(daoManagerKeys.lists(), totalDaoList, {
    refetchInterval: 3e4,
    staleTime: Infinity,
    refetchOnWindowFocus: import.meta.env.PROD,
  });
};
export const useDaoStatus = (cid: string) => {
  return useQuery(daoManagerKeys.status(cid), daoStatus, {
    refetchOnWindowFocus: import.meta.env.PROD,
  });
};

export const useCreateAction = () => {
  const queryClient = useQueryClient();
  return useMutation(createDao, {
    onSuccess: (data, variable, ctx) => {
      // console.log('createAction', data, variable, ctx);
      queryClient.invalidateQueries(daoManagerKeys.lists());
    },
  });
};
