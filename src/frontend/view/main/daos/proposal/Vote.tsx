import { getNnsdaoActor } from '@/frontend/service';
import { Principal } from '@dfinity/principal';
import { Modal } from '@mui/material';
import { UserVoteArgs } from '@nnsdao/nnsdao-kit/src/nnsdao/types';
import React from 'react';
const Vote = props => {
  const { isOpen, setOpenVote } = props;
  const vote = async () => {
    const nnsdaoActor = await getNnsdaoActor({ needAuth: true });
    const params: UserVoteArgs = {
      id: BigInt(0),
      principal: [Principal.fromText('1')],
      vote: { Yes: BigInt(0) } || { No: BigInt(0) },
    };
    const res = await nnsdaoActor.vote(params);
    console.log(res);
    //@ts-ignore
  };
  return (
    <Modal onClose={() => setOpenVote(false)} open={isOpen}>
      <div className=" mb-5 p-5  ">
        <div>
          <input type="Number" />
        </div>
        <div>Cancel</div>
        <div onClick={vote}>Confirm</div>
      </div>
    </Modal>
  );
};
export default Vote;
