import { HttpAgent } from '@dfinity/agent';
import { _SERVICE as DaoManagerActor } from '@nnsdao/nnsdao-kit/dao_manager/types';
import nicpActor from '@nnsdao/nnsdao-kit/dip20/types';
import { _SERVICE as DistributeActor } from '@nnsdao/nnsdao-kit/distribute/types';
import { _SERVICE as nnsdaoActor } from '@nnsdao/nnsdao-kit/nnsdao/types';
// import { idlFactory as distributeIDL } from '@nnsdao/nnsdao-kit/distribute/index.js';
import { getActor } from '@nnsdao/nnsdao-kit/helper/agent';
import canister from './config';

export const LOGINTYPE = localStorage.getItem('loginType');
export const PLUGLOGIN = LOGINTYPE === 'plug';

// default create a anonymous agent
// When sign in, replace this
export const $agent: HttpAgent = new HttpAgent();

// anonymous agent can more efficient then auth agent;
export const $anonymousAgent: HttpAgent = new HttpAgent();

export const getDistributeActor = async (needAuth?: boolean) => getActor<DistributeActor>({ needAuth, ...canister.distribute });
export const getNnsdaoActor = async (needAuth?: boolean) => getActor<nnsdaoActor>({ needAuth, ...canister.nnsdao });
export const getNICPActor = async (needAuth?: boolean) => getActor<nicpActor>({ needAuth, ...canister.nicp });

export const getDaoManagerActor = async (needAuth?: boolean) => getActor<DaoManagerActor>({ needAuth, ...canister.nicp });
