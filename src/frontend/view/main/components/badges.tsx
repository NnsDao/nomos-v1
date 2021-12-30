import React from 'react';
import './badges.css';
type Prop = {
  data: string;
  desc: string;
  name: string;
  requtation: string;
  token: string;
};

const badges = (prop: Prop) => {
  const handleClick = (token: string) => {
    window.open(token);
  };

  return (
    <>
      <div className="badges-wrapper">
        <div className="badges-content">
          <img onClick={() => handleClick(prop.token)} src={`data:image/jpg;base64,${prop.data}`} alt={prop.desc} width={'138px'} height={'175px'} />
        </div>
        <div className="badges-text">{prop.name}</div>
      </div>
    </>
  );
};
export default badges;
