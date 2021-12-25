import React from 'react';
import patrick3 from '../../../assets/main/patrick3.png';
import './card.css';
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

  <div className={`card-wrapper `}>
    <div className="card">
      <div className=" w-full flex justify-center items-center ">
        <div className=" flex justify-center items-center rounded-full  overflow-hidden relative z-1">
          {prop.isCreate ? (
            <div className="w-130px h-130px flex justify-center items-center text-4xl">+</div>
          ) : (
            <div className="w-130px h-130px  mx-auto flex justify-center items-center  ">
              <div className="w-130px h-130px ">
                <img src={patrick3} alt="" width={'130px'} height={'130px'} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between h-1/3">
        <div className=" card-title ">{prop.title}</div>
        <div className=" card-number ">{prop.number}</div>
        {prop.isCreate ? <div className=" card-content ">{'Create DAOs'}</div> : <div className=" card-content ">{prop.content}</div>}
      </div>
    </div>
  </div>
);
export default Card;
