import { Principal } from '@dfinity/principal';
import { message } from 'antd';
import React, { useState } from 'react';
import { getNICPActor, getNnsdaoActor } from '../../../../service/index';

const CreateProposal = props => {
  const principal = window.localStorage.getItem('principal')!;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const getPayAddress = async () => {
    const nnsdaoActor = await getNnsdaoActor({ needAuth: true });
    const res = await nnsdaoActor.get_pay_address();
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
  const transfer = async principal => {
    // setTransferLoading(true);
    // setTransferText('In Sync Block... ');
    const NICPActor = await getNICPActor({ needAuth: true });
    const res = await NICPActor.transfer(Principal.fromText(principal), BigInt(Number(props.number) * 1e8)).then(r => {
      console.log(r);
      return r;
    });
    //@ts-ignore
    if (res.Ok > 0) {
      // setTransferLoading(false);
      // setTransferText('Transfer');
      // props.cancelConfirm();
      // props.cancelFrom();
      message.success({ content: ' success', duration: 3 });
    } else {
      // setTransferLoading(false);
      // setTransferText('Transfer');
      // props.cancelConfirm();
      message.error({ content: ' error', duration: 3 });
    }
  };
  const checkBalance = async () => {
    const balanceNICP = await getBalance();
    const undefinedNdp = 100;
    if (balanceNICP > undefinedNdp) {
      const payAddress = await getPayAddress();
      transfer(payAddress);
    }
  };

  return (
    <div className="pb-10">
      <div className="flex justify-between items-center mb-5">
        Title
        <input
          style={{
            width: '470px',
            height: '54px',
            background: 'rgba(225, 225, 225, 0.13)',
            borderColor: '#3F62E4',
            borderRadius: '4px',
            color: 'white',
            paddingLeft: '20px',
          }}
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter your title"
        />
      </div>
      <div className="flex justify-between items-center mb-10">
        Content
        <input
          style={{
            width: '470px',
            height: '54px',
            background: 'rgba(225, 225, 225, 0.13)',
            borderColor: '#3F62E4',
            borderRadius: '4px',
            color: 'white',
            paddingLeft: '20px',
          }}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Enter your content"
        />
      </div>
      <div onClick={checkBalance} className="daos-content-join w-56 h-50 px-1 bg-sign rounded text-#fff whitespace-nowrap cursor-pointer">
        Create Proposal
      </div>
    </div>
  );
};
export default CreateProposal;
