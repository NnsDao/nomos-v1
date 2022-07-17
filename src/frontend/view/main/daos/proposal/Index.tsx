import React, { useEffect, useState } from 'react';
import { getNnsdaoActor } from '../../../../service/index';

const Proposal = props => {
  const [proposalList, setProposalList] = useState([]);

  const getProposalList = async () => {
    const nnsdaoActor = await getNnsdaoActor({ needAuth: true });
    const res = await nnsdaoActor.proposal_list();
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
    <div>
      {proposalList.map(item => (
        <div>{item}</div>
      ))}
    </div>
  );
};
export default Proposal;
