import { HttpAgent } from '@dfinity/agent';
import { _SERVICE as DistributeActor } from '@nnsdao/nnsdao-kit/distribute/distribute.did';
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

// export const getActor: any = async (props: getActorProps) => {
//   // eslint-disable-next-line prefer-const
//   let { cid, idl, needAuth = true } = props;

//   // // use  default ext idl
//   // if (typeof idl !== 'function') {
//   //   if (idl === 'starfish') {
//   //     idl = starfishIDL;
//   //   } else if (idl === 'ext') {
//   //     idl = extIDL;
//   //   } else {
//   //     idl = extIDL;
//   //     console.warn('Use the default ext standard IDL !');
//   //   }
//   // }

//   // const actor = PLUGLOGIN
//   //   ? // @ts-ignore
//   //     await window.ic.plug.createActor({ canisterId: cid, interfaceFactory: idl })
//   //   : Actor.createActor(idl, { agent: needAuth ? $agent : $anonymousAgent, canisterId: cid });
//   console.log(NdpService.agent, ' NdpService.agent');

//   const actor = Actor.createActor(distributeIDL, { agent: needAuth ? NdpService.agent : $anonymousAgent, canisterId: cid });
//   return actor;
// };

// DistributeActor
// export const distributeActor: DistributeActor = getActor({ needAuth: true, idl: canister.distribute.idl ,cid: }).then(r => {
//   return r;
// });
export const getDistributeActor = async (props: ActorProps = {}) => getActor({ ...props, ...canister.distribute, needAuth: false }) as unknown as Promise<DistributeActor>;

// Type
type getActorProps = {
  cid: string; // canisterId
  needAuth?: boolean; // default use auth agent
  idl?: () => any | 'starfish' | 'ext'; // interfaceFactory
};

type ActorProps = getActorProps | Record<string, any>;
