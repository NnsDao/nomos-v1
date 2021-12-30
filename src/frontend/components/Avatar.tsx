import React from 'react';
import nnsAvatar from '../assets/nnsdao-logo-200.png';
import './avatar.css';
type Prop = {
  url?: string;
  width?: string;
};
const Index = (prop: Prop) => {
  return <div className="avatar-wrapper">{prop.url ? <img className="" src={prop.url} width={prop.width} alt="" /> : <img src={nnsAvatar} width="106px" height="106px" alt="" />}</div>;
};
export default Index;
