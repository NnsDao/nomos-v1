import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useUserStore } from '../../../hooks/userStore';
import { getNnsdaoActor } from '../../../service/index';
import CreateProposal from './createProposal/Index';
import './index.css';
import Members from './members/Index';
import Proposal from './proposal/Index';
import Rule from './rule/Index';
import SetProfile from './setProfile/Index';
const Index = () => {
  const userStore = useUserStore();
  const [active, setActive] = useState('Rule');
  const navList = ['Rule', 'Members', 'Proposal', 'CreateProposal', 'SetProfile'];
  const accountId = userStore.accountId;
  const [status_code, setStatusCode] = useState(0);
  const join = async () => {
    const nnsdaoActor = await getNnsdaoActor(true);
    const joinParams = { nickname: accountId, social: [], intro: '', avatar: '' };
    const res = await nnsdaoActor.join(joinParams);
    console.log(res);
    //@ts-ignore
    if (res.Ok) {
      setStatusCode(1);
      message.success({ content: 'Join success', duration: 3 });
    } else {
      message.error({ content: 'Join error', duration: 3 });
    }
  };
  const quit = async () => {
    const nnsdaoActor = await getNnsdaoActor(true);
    const res = await nnsdaoActor.quit();
    console.log(res);
    //@ts-ignore
    if (res.Ok) {
      setStatusCode(1);
      message.success({ content: 'Quit success', duration: 3 });
    } else {
      message.error({ content: 'Quit error', duration: 3 });
    }
  };
  const getUserInfo = async () => {
    const nnsdaoActor = await getNnsdaoActor(true);
    const res = await nnsdaoActor.user_info();
    console.log(res);

    //@ts-ignore
    if (res.Ok) {
      //@ts-ignore
      const { status_code } = res.Ok;
      setStatusCode(status_code);
    } else {
      setStatusCode(0);
    }
  };

  useEffect(() => {
    getUserInfo();
  });
  return (
    <>
      <div className=" wrapper flex  justify-between  text-white">
        <div className=" mt-6 mr-16">
          {navList.map(item => (
            <div
              className={`daos-button mb-6 + ${active == item ? ' daos-button-selected ' : ' '}`}
              onClick={() => setActive(item)}
              key={item}>
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
            <div className="daos-content-text">{active}</div>
            {status_code === 1 ? (
              <div className="daos-content-join" onClick={quit}>
                Quit
              </div>
            ) : (
              <div className="daos-content-join" onClick={join}>
                JOIN
              </div>
            )}
          </div>
          <div className="daos-content">
            {active === 'Rule' ? <Rule></Rule> : ''}
            {active === 'Members' ? <Members /> : ''}
            {active === 'Proposal' ? <Proposal /> : ''}
            {active === 'CreateProposal' ? <CreateProposal /> : ''}
            {active === 'SetProfile' ? <SetProfile /> : ''}
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
