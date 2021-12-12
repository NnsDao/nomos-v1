import React from 'react';
import './card.css';
import patrick3 from '../../../assets/main/patrick3.png';
type Prop = {
  url: string;
  title?: string;
  content: string;
  number?: string;
  isEnshrine?: boolean;
  isCreate?: boolean;
  isActivity?: {
    type: boolean;
    defaule: false;
  };
};

const Card = (prop: Prop) => (
  // <div className={`card-wrapper`} style={{ width: '21%' }} >

  <div className={`card-wrapper`}>
    <div className=" w-full my-4 flex justify-between items-center ">
      <div className=" flex justify-center items-center">{prop.isCreate ? <div className="w-4/5 flex justify-center items-center ">+</div> : <img src={patrick3} width={'80%'} alt="" />}</div>
    </div>
    <div className="flex flex-col justify-between h-1/3">
      <div className=" card-title ">{prop.title}</div>
      <div className=" card-number ">{prop.number}</div>
      {prop.isCreate ? <div className=" card-content ">{'Create DAOs'}</div> : <div className=" card-content ">{prop.content}</div>}
    </div>
  </div>
);
export default Card;
