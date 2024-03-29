import { Avatar } from '@mui/material';
import { MemberItems } from '@nnsdao/nnsdao-kit/nnsdao/types';
import React, { useEffect, useState } from 'react';
const Members = props => {
  const [memberList, setmemberList] = useState<Array<MemberItems>>([]);

  const getMemberList = async () => {
    // const nnsdaoActor = await getNnsdaoActor(true);
    // const res = await nnsdaoActor.member_list();
    // console.log(res, 'member_list');
    // //@ts-ignore
    // if (res.Ok) {
    //   //@ts-ignore
    //   setmemberList(res.Ok);
    // } else {
    //   console.log(res, 'member_list error');
    // }
  };
  useEffect(() => {
    getMemberList();
  });
  return (
    <div className="daos-members-wrapper">
      <div className="daos-members-header">
        <span className="daos-members-text">Members</span>
        <span className="daos-members-text">Posts/ Month</span>
      </div>
      <div className="pb-5">
        {memberList.map((item, index) => (
          <div className=" daos-members-content " key={index}>
            <div>
              <Avatar />
              <span className="ml-4  ">{item.nickname}</span>
            </div>
            <div>{item.intro ? item.intro : '/'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Members;
