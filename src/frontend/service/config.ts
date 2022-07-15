import { idlFactory as nicpIDL } from '@nnsdao/nnsdao-kit/dip20/index';
import { idlFactory as distributeIDL } from '@nnsdao/nnsdao-kit/distribute/index';
export { distributeIDL };
const canister = {
  distribute: {
    cid: 'pdvmy-7iaaa-aaaal-qbabq-cai',
    idl: distributeIDL,
  },
  nicp: {
    cid: '75phv-6aaaa-aaaap-aae5a-cai',
    idl: nicpIDL, //TODO need update idl
  },
};
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
];
export default canister;
