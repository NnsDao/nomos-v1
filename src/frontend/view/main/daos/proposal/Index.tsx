import { Result_1 } from '@nnsdao/nnsdao-kit/src/nnsdao/types';
import React, { useEffect, useState } from 'react';
import { getNnsdaoActor } from '../../../../service/index';

const Proposal = props => {
  const [proposalList, setProposalList] = useState<[] | Result_1>([]);

  const getProposalList = async () => {
    const nnsdaoActor = await getNnsdaoActor({ needAuth: true });
    const res = await nnsdaoActor.get_proposal_list();
    console.log(res);
    //@ts-ignore
    if (res.Ok) {
      //@ts-ignore
      setProposalList(res.Ok);
    } else {
      console.log(res);
    }
  };
  useEffect(() => {
    getProposalList();
  });
  return (
    <div className="w-full pb-5">
      {
        //@ts-ignore
        proposalList.length > 0 &&
          //@ts-ignore
          proposalList.map(item => (
            <div className="border mb-5">
              <div> id: {item[1].id ? Number(item[1].id) : null}</div>
              <div> title: {item[1].title ? item[1].title : null}</div>
              <div> content : {item[1].content ? item[1].content : null}</div>
              <div> proposal_state:</div>
              <div> timestamp: {item[1].timestamp ? Number(item[1].timestamp) : null}</div>
            </div>
          ))
      }
    </div>
  );
};
export default Proposal;
