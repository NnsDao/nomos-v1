import { Principal } from '@dfinity/principal';
import { UserVoteArgs } from '@nnsdao/nnsdao-kit/src/nnsdao/types';
import React, { useState } from 'react';
import { getNICPActor, getNnsdaoActor } from '../../../../service/index';
import Info from './Info';

const ProposalItem = props => {
  const [isOpen, setOpen] = useState(false);
  const vote = async (type: string) => {
    console.log('vote start');
    let balance = 0;
    const principal = window.localStorage.getItem('principal')!;
    type === 'Yes' ? (balance = 15) : (balance = 10);
    const NICPActor = await getNICPActor({ needAuth: true });
    const approve = await NICPActor.approve(Principal.fromText('67bzx-5iaaa-aaaam-aah5a-cai'), BigInt(Number(balance) * 1e8));
    console.log(`approve`, approve);
    const nnsdaoActor = await getNnsdaoActor({ needAuth: true });
    const params: UserVoteArgs = {
      id: BigInt(props.data[1].id),
      principal: [Principal.fromText(principal)],
      vote: type === 'Yes' ? { Yes: BigInt(balance * 1e8) } : { No: BigInt(balance * 1e8) },
    };
    const res = await nnsdaoActor.vote(params);
    console.log(res, 'vote res');
  };
  return (
    <div
      className=" mb-5 p-5  transform hover:scale-102 cursor-pointer hover:shadow hover:border-#8778d5"
      onClick={() =>
        //  setOpen(true)
        console.log(1)
      }>
      <div className="flex justify-between">
        <div className="flex justify-start">
          <div className="font-bold text-xl text-blue-500 pr-10">{props.data[1].title ? props.data[1].title : null}</div>
          <div className="text-gray-200"> (ID: {props.data[1].id ? Number(props.data[1].id) : null})</div>
        </div>
        <div> proposal_state:</div>
      </div>
      <div className="py-5"> ## content : {props.data[1].content ? props.data[1].content : null}</div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="pr-10">YES :</div>
          <div>NO : </div>
        </div>
        <div> timestamp: {props.data[1].timestamp ? Number(props.data[1].timestamp) : null}</div>
      </div>
      <div>
        <div className="py-10">Test Test Test Test Test Test Test Test Test Test Test Test Test</div>
        <div>
          <button onClick={() => vote('Yes')} className="mr-20">
            Vote Yes
          </button>
          <button onClick={() => vote('No')}>Vote No</button>
        </div>
      </div>
      <Info isOpen={isOpen} setOpen={setOpen} data={props.data}></Info>
    </div>
  );
};
export default ProposalItem;
