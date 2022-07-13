import { _SERVICE as DistributeActor } from '@nnsdao/nnsdao-kit/distribute/types';
import { _SERVICE as nicpActor } from '@nnsdao/nnsdao-kit/nicpActor/types';
// import { idlFactory as distributeIDL } from '@nnsdao/nnsdao-kit/distribute/index.js';
import { getActor } from '@nnsdao/nnsdao-kit/helper/agent';
import canister from './config';

export const getDistributeActor = async (props: any) => getActor({ ...props, ...canister.distribute, needAuth: false }) as unknown as Promise<DistributeActor>;
export const getNICPActor = async (props: any) => getActor({ ...props, ...canister.nicp, needAuth: false }) as unknown as Promise<nicpActor>;
