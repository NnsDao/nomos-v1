import { _SERVICE as DistributeActor } from '@nnsdao/nnsdao-kit/distribute/types';
// import { idlFactory as distributeIDL } from '@nnsdao/nnsdao-kit/distribute/index.js';
import { getActor } from '@nnsdao/nnsdao-kit/helper/agent';
import canister from './config';

export const getDistributeActor = async (props: any) => getActor({ ...props, ...canister.distribute, needAuth: false }) as unknown as Promise<DistributeActor>;
