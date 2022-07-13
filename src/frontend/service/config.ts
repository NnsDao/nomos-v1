import { idlFactory as distributeIDL } from '@nnsdao/nnsdao-kit/distribute/index';
export { distributeIDL };
const canister = {
  distribute: {
    cid: 'pdvmy-7iaaa-aaaal-qbabq-cai',
    idl: distributeIDL,
  },
  nicp: {
    cid: '75phv-6aaaa-aaaap-aae5a-cai',
    idl: distributeIDL, //TODO need update idl
  },
};
export default canister;
