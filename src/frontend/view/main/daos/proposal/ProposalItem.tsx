import React, { useState } from 'react';
import Info from './Info';

const ProposalItem = props => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=" mb-5 p-5  transform hover:scale-102 cursor-pointer hover:shadow hover:border-#8778d5" onClick={() => setOpen(true)}>
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
      <Info isOpen={isOpen} setOpen={setOpen} data={props.data}></Info>
    </div>
  );
};
export default ProposalItem;
