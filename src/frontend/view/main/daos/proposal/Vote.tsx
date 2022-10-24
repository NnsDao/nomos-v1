import { Modal } from '@mui/material';
import React from 'react';
const Vote = props => {
  const { isOpen, setOpenVote } = props;
  // first fetch balance
  // 1-100 ndp

  const voteFN = async () => {
    // const nnsdaoActor = await getNnsdaoActor(true);
    // const params: UserVoteArgs = {
    //   id: BigInt(0),
    //   principal: [Principal.fromText('1')],
    //   vote: { Yes: BigInt(1) } || { No: BigInt(0) },
    // };
    // // 2. approve
    // // 3. vote
    // const res = await nnsdaoActor.vote(params);
    // console.log(res);
    //@ts-ignore
  };
  return (
    <Modal onClose={() => setOpenVote(false)} open={isOpen}>
      <div className=" mb-5 p-5  ">
        <div>
          <input type="Number" />
        </div>
        <div>Cancel</div>
        <div onClick={voteFN}>Confirm</div>
      </div>
    </Modal>
  );
};
export default Vote;
