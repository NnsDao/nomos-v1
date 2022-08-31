import { useMutation, useQuery } from '@tanstack/react-query';
import { getNnsdaoActor } from '../../service';
import { nnsdaoKeys } from './queries';

export const get_handled_proposal = async ({ queryKey }) => {
  const { module, scope } = queryKey[0];
  const actor = await getNnsdaoActor(false);
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
  const { module, scope } = queryKey[0];
  const actor = await getNnsdaoActor(false);
  try {
    const res = await actor.get_proposal();
    console.log('get_proposal', res);
    return res;
  } catch (error) {
    console.log('get_proposal', error);
    return Promise.reject(null);
  }
};
export const join = async ({ queryKey }) => {
  const { module, scope } = queryKey[0];
  const actor = await getNnsdaoActor(false);
  try {
    const res = await actor.join();
    console.log('join', res);
    return res;
  } catch (error) {
    console.log('join', error);
    return Promise.reject(null);
  }
};
export const member_list = async ({ queryKey }) => {
  const { module, scope } = queryKey[0];
  const actor = await getNnsdaoActor(false);
  try {
    const res = await actor.member_list();
    console.log('member_list', res);
    return res;
  } catch (error) {
    console.log('member_list', error);
    return Promise.reject(null);
  }
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
export const quit = async ({ queryKey }) => {
  const { module, scope } = queryKey[0];
  const actor = await getNnsdaoActor(false);
  try {
    const res = await actor.quit();
    console.log('quit', res);
    return res;
  } catch (error) {
    console.log('quit', error);
    return Promise.reject(null);
  }
};
export const user_info = async ({ queryKey }) => {
  const { module, scope } = queryKey[0];
  const actor = await getNnsdaoActor(true);
  try {
    const res = await actor.user_info();
    console.log('user_info', res);
    //@ts-ignore
    if (res.Ok) {
      //@ts-ignore
      return res.Ok;
    } else {
      return Promise.reject(null);
    }
  } catch (error) {
    console.log('user_info', error);
    return Promise.reject(null);
  }
};
export const vote = async ({ queryKey }) => {
  const { module, scope } = queryKey[0];
  const actor = await getNnsdaoActor(false);
  try {
    const res = await actor.vote();
    console.log('vote', res);
    return res;
  } catch (error) {
    console.log('vote', error);
    return Promise.reject(null);
  }
};

export const useGetUserInfo = () => {
  return useQuery(nnsdaoKeys.userInfo(), user_info);
};
export const useVote = () => {
  return useQuery(nnsdaoKeys.vote(), vote);
};
export const useQuit = () => {
  return useQuery(nnsdaoKeys.quit(), quit);
};
export const usePropose = () => {
  return useQuery(nnsdaoKeys.propose(), propose);
};
export const useMemberList = () => {
  return useQuery(nnsdaoKeys.member_list(), member_list);
};
export const useJoin = params => {
  return useMutation(params => nnsdaoKeys.join(params));
};
export const useGetProposal = () => {
  return useQuery(nnsdaoKeys.get_proposal(), get_proposal);
};
export const useGetHandledProposal = () => {
  return useQuery(nnsdaoKeys.get_handled_proposal(), get_handled_proposal);
};
