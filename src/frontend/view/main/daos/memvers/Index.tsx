import { Avatar } from 'antd';
import React from 'react';

const Memvers = () => {
  const dataList = [
    {
      name: 'mark',
      num: 15,
    },
    {
      name: 'mark',
      num: 15,
    },
    {
      name: 'mark',
      num: 15,
    },
    {
      name: 'mark',
      num: 15,
    },
    {
      name: 'mark',
      num: 15,
    },
    {
      name: 'mark',
      num: 15,
    },
    {
      name: 'mark',
      num: 15,
    },
    {
      name: 'mark',
      num: 15,
    },
    {
      name: 'mark',
      num: 15,
    },
  ];
  return (
    <div className="daos-members-wrapper">
      <div className="daos-members-header">
        <span className="daos-members-text">Members</span>
        <span className="daos-members-text">Posts/ Month</span>
      </div>
      <div className="pb-5">
        {dataList.map((item, index) => (
          <div className=" daos-members-content " key={index}>
            <div>
              <Avatar size={22} />
              <span className="ml-4  ">Mark</span>
            </div>
            <div>{111}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Memvers;
