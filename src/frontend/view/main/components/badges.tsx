import React from 'react';
import img from '../../../assets/main/5.png';
import './badges.css';
type Prop = {
  img?: string;
  text?: string;
};

const badges = (prop: Prop) => (
  <div className="badges-wrapper">
    <div className="badges-content">{prop.img ? <img src={prop.img} alt="" width={'138px'} height={'175px'} /> : <img src={img} alt="" width={'138px'} height={'175px'} />}</div>
    <div className="badges-text">{prop.text}</div>
  </div>
);
export default badges;
