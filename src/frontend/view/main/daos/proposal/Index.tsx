import { Result_1 } from '@nnsdao/nnsdao-kit/src/nnsdao/types';
import React, { useEffect, useState } from 'react';
import ProposalItem from './ProposalItem';

const Proposal = props => {
  const [proposalList, setProposalList] = useState<[] | Result_1>([]);

  const getProposalList = async () => {
    // const nnsdaoActor = await getNnsdaoActor(true);
    // const res = await nnsdaoActor.get_proposal_list();
    // console.log(res);
    // //@ts-ignore
    // if (res.Ok) {
    //   //@ts-ignore
    //   setProposalList(res.Ok);
    // } else {
    //   console.log(res);
    // }
  };
  useEffect(() => {
    getProposalList();
  }, []);
  return (
    <div className="w-full pb-5">
      {
        //@ts-ignore
        proposalList.length > 0 &&
          //@ts-ignore
          proposalList.map(item => <ProposalItem data={item} key={item[0]}></ProposalItem>)
      }
    </div>
  );
};
export default Proposal;
