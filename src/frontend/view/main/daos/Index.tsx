import { Principal } from '@dfinity/principal';
import React, { useEffect, useState } from 'react';
import { getNnsdaoActor } from '../../../service/index';
import './index.css';
import Memvers from './memvers/Index';
import Rule from './rule/Index';
const Index = () => {
  const [text, setText] = useState('Rule');
  const [active, setActive] = useState('Rule');
  const navList = ['Rule', 'Members', 'Proposal', 'Create Proposal', 'Set Profile'];
  const accountId = window.localStorage.getItem('accountId')!;
  const principal = window.localStorage.getItem('principal')!;
  const join = async () => {
    const nnsdaoActor = await getNnsdaoActor({ needAuth: true });
    const joinParams = { nickname: accountId, social: {}, intro: '', avatar: '' };
    const res = nnsdaoActor.join(joinParams);
    console.log(res);
  };
  const quit = async () => {
    const nnsdaoActor = await getNnsdaoActor({ needAuth: true });
    const res = nnsdaoActor.quit();
    console.log(res);
  };
  const getUserInfo = async () => {
    const nnsdaoActor = await getNnsdaoActor({ needAuth: true });
    const res = nnsdaoActor.user_info();
    console.log(res);
  };

  const getMemberList = async () => {
    const nnsdaoActor = await getNnsdaoActor({ needAuth: true });
    const res = nnsdaoActor.member_list();
    console.log(res);
  };
  const getPayAddress = async () => {
    const nnsdaoActor = await getNnsdaoActor({ needAuth: true });
    const res = nnsdaoActor.get_pay_address();
    console.log(res);
  };
  const getBalance = async () => {
    const NICPActor = await getNICPActor({ needAuth: true });
    console.log(NICPActor, 'NICPActor');
    const balanceNICP = await NICPActor.balanceOf(Principal.fromText(principal)).then(r => {
      return r;
    });
    return balanceNICP;
  };
  const checkBalance = async () => {};

  useEffect(() => {
    getMemberList();
    getUserInfo();
  });
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
            <div className="daos-content-join" onClick={() => join}>
              JOIN
            </div>
            <div className="daos-content-join" onClick={() => quit}>
              Quit
            </div>
          </div>
          <div className="daos-content">{active === 'Rule' ? <Rule></Rule> : <Memvers></Memvers>}</div>
        </div>
      </div>
    </>
  );
};
export default Index;
