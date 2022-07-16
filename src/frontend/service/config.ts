import { idlFactory as distributeIDL } from '@nnsdao/nnsdao-kit/distribute/index.js';
import { idlFactory as nnsdaoIDL } from '@nnsdao/nnsdao-kit/nnsdao/index';
export { distributeIDL };
export { nnsdaoIDL };
const canister = {
  distribute: {
    cid: 'pdvmy-7iaaa-aaaal-qbabq-cai',
    idl: distributeIDL,
  },
  nnsdao: {
    cid: '67bzx-5iaaa-aaaam-aah5a-cai',
    idl: nnsdaoIDL,
  },
};
export default canister;
