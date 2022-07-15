import React, { useState } from 'react';
import './index.css';
import Memvers from './memvers/Index';
import Rule from './rule/Index';
const Index = () => {
  const [text, setText] = useState('Rule');
  const [active, setActive] = useState('Rule');
  const navList = ['Rule', 'Members', 'Proposal', 'Create Proposal', 'Set Profile'];
  return (
    <>
      <div className=" wrapper flex  justify-between  text-white">
        <div className=" mt-6 mr-16">
          {navList.map(item => (
            <div className={`daos-button mb-6 + ${active == item ? ' daos-button-selected ' : ' '}`} onClick={() => setActive(item)} key={item}>
              {item}
            </div>
          ))}
          {/* <div className={`daos-button + ${active === 'Rule' ? ' daos-button-selected ' : ' '}`} onClick={() => setActive('Rule')}>
            Rule
          </div>
          <div className={` daos-button mt-6 +  ${active === 'Memvers' ? ' daos-button-selected ' : ' '}`} onClick={() => setActive('Memvers')}>
            Memvers
          </div> */}
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="daos-content-text">{text}</div>
            <div className="daos-content-join">JOIN</div>
          </div>
          <div className="daos-content">{active === 'Rule' ? <Rule></Rule> : <Memvers></Memvers>}</div>
        </div>
      </div>
    </>
  );
};
export default Index;
