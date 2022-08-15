import { Modal } from '@mui/material';
import React, { useState } from 'react';
import Vote from './Vote';

const Info = props => {
  const onClose = () => {
    console.log(1);
  };
  const [isOpenVote, setOpenVote] = useState(false);
  return (
    <Modal onClose={() => props.setOpen(false)} open={props.isOpen}>
      <div className=" flex flex-col justify-center  items-center text-white  border-purple-900">
        <div className="">
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
        <Vote isOpen={isOpenVote} setOpenVote={setOpenVote}></Vote>
      </div>
    </Modal>
  );
};
export default Info;
