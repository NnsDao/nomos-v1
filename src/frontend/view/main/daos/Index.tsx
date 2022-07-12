import { Avatar } from 'antd';
import React, { useState } from 'react';
import './index.css';
const Index = () => {
  const [text, setText] = useState('Rule');
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
          <div className="daos-content">
            {active === 'Rule' ? (
              <div className="daos-rule-wrapper">
                <div className="daos-rule-wrapper-title">Auto Layout Layer Reversal</div>
                <div className=" daos-rule-wrapper-line "></div>
                <p> ❖ Reverse the “z-index” of items that have Auto Layout applied. AKA Match layer order with stacking order.</p>
                <p> ❖ Useful when you have elements with shadows or overhanging shapes that need to be on top of its Auto Layout siblings.</p>
                <p> ❖ Reverse the “z-index” of items that have Auto Layout applied. AKA Match layer order with stacking order.</p>
                <p> ❖ Useful when you have elements with shadows or overhanging shapes that need to be on top of its Auto Layout siblings.</p>
                <p> ❖ Reverse the “z-index” of items that have Auto Layout applied. AKA Match layer order with stacking order.</p>
                <p> ❖ Useful when you have elements with shadows or overhanging shapes that need to be on top of its Auto Layout siblings.</p>
                <p> ❖ Reverse the “z-index” of items that have Auto Layout applied. AKA Match layer order with stacking order.</p>
                <p> ❖ Useful when you have elements with shadows or overhanging shapes that need to be on top of its Auto Layout siblings.</p>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
