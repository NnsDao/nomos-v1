import { _SERVICE as DaoManagerActor } from '@nnsdao/nnsdao-kit/dao_manager/types';
import nicpActor from '@nnsdao/nnsdao-kit/dip20/types';
import { _SERVICE as DistributeActor } from '@nnsdao/nnsdao-kit/distribute/types';
import { _SERVICE as NIDActor } from '@nnsdao/nnsdao-kit/nid/types';
import { _SERVICE as nnsdaoActor } from '@nnsdao/nnsdao-kit/nnsdao/types';
// import { idlFactory as distributeIDL } from '@nnsdao/nnsdao-kit/distribute/index.js';
import { getActor } from '@nnsdao/nnsdao-kit/helper/agent';
import storage from '@nnsdao/nnsdao-kit/helper/storage';
import canister from './config';

export const LOGINTYPE = storage.get('loginType');
export const PLUGLOGIN = LOGINTYPE === 'plug';

export const getDistributeActor = async (needAuth?: boolean) =>
  getActor<DistributeActor>({ needAuth, ...canister.distribute });
export const getNICPActor = async (needAuth?: boolean) => getActor<nicpActor>({ needAuth, ...canister.nicp });
export const getDaoManagerActor = async (needAuth?: boolean) =>
  getActor<DaoManagerActor>({ needAuth, ...canister.dao_manager });

export const getNnsdaoActor = async (cid: string, needAuth?: boolean) =>
  getActor<nnsdaoActor>({ needAuth, ...canister.nnsdao, cid });

// nid
export const getNIDActor = async (needAuth?: boolean) => getActor<NIDActor>({ needAuth, ...canister.nid });
