import { idlFactory as dao_manager_IDL } from '@nnsdao/nnsdao-kit/dao_manager/index';
import { idlFactory as nicpIDL } from '@nnsdao/nnsdao-kit/dip20/index';
import { idlFactory as distributeIDL } from '@nnsdao/nnsdao-kit/distribute/index';
import { idlFactory as nnsdaoIDL } from '@nnsdao/nnsdao-kit/nnsdao/index';
export { distributeIDL };
export { nnsdaoIDL };
export const canister = {
  distribute: {
    cid: 'pdvmy-7iaaa-aaaal-qbabq-cai',
    idl: distributeIDL,
  },
  nnsdao: {
    cid: '67bzx-5iaaa-aaaam-aah5a-cai',
    idl: nnsdaoIDL,
  },
  nicp: {
    cid: 'vgqnj-miaaa-aaaal-qaapa-cai',
    idl: nicpIDL,
  },
  dao_manager: {
    cid: 'w3p32-waaaa-aaaah-aboyq-cai',
    idl: dao_manager_IDL,
  },
};
// ndp prod = 'vgqnj-miaaa-aaaal-qaapa-cai'
// const canisterId = 'vgqnj-miaaa-aaaal-qaapa-cai';
// const badgeCanisterId = 'rfde3-eyaaa-aaaal-qaaua-cai';
// const userCanisterId = 'o27sk-yiaaa-aaaag-qabbq-cai';
// const nftCanisterId = 'vcpye-qyaaa-aaaak-qafjq-cai';
// const xdrCanisterId = 'rkp4c-7iaaa-aaaaa-aaaca-cai';

export const canisterIdList = [
  'vgqnj-miaaa-aaaal-qaapa-cai',
  'rfde3-eyaaa-aaaal-qaaua-cai',
  'o27sk-yiaaa-aaaag-qabbq-cai',
  'vcpye-qyaaa-aaaak-qafjq-cai',
  'rkp4c-7iaaa-aaaaa-aaaca-cai',
  'pdvmy-7iaaa-aaaal-qbabq-cai',
  '75phv-6aaaa-aaaap-aae5a-cai',
  '67bzx-5iaaa-aaaam-aah5a-cai',
  'w3p32-waaaa-aaaah-aboyq-cai',
];
export default canister;
