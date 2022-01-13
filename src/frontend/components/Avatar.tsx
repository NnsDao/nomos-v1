import React from 'react';
import nnsAvatar from '../assets/nnsdao-logo-200.png';
import './avatar.css';
type Prop = {
  url?: string;
  width?: string;
};
const Index = (prop: Prop) => {
  return (
    <div className="avatar-wrapper">
      {prop.url ? <img className="" src={prop.url} width={prop.width} alt="" /> : <img src={nnsAvatar} width="106px" height="106px" alt="" />}
      {/* <div className="avatar-shade"></div>
      <div className="dialog-wrapper">
        <div className="dialog-bg">
          <img className="dialog-close" alt="" />
          <div className="head"></div>
          <div className="content">
            <div className="avator">
              <img className="v2avatorUrl" src="avatorUrl" alt="" />
            </div>
            <div className="input">
              <input />
            </div>
            <div className="footer">
              <div className="cancel"></div>
              <div className="ok"></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Index;
