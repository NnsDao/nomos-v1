import { useQuery } from '@tanstack/react-query';
import { getDaoManagerActor } from '../../service';
import { DaoManagerKeys } from './queries';

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

export const useTotalDaoLists = () => {
  return useQuery(DaoManagerKeys.lists(), totalDaoList);
};
