import { Principal } from '@dfinity/principal';
import { message } from 'antd';
import React, { useState } from 'react';
import { RingLoader } from 'react-spinners';
import Loading from '../../../components/Loading';
import { useUserStore } from '../../../hooks/userStore';
import { getNICPActor } from '../../../service/index';

type Prop = {
  principalText: any;
  number: any;
  cancelConfirm: Function;
  cancelFrom: Function;
  setNDP: Function;
};

const confirm = (props: Prop) => {
  const [isloading, setIsLoading] = useState(false);
  const [isTransferLoading, setTransferLoading] = useState(false);
  const [transferText, setTransferText] = useState('Transfer');
  const userStore = useUserStore();
  const principal = userStore.principalId;
  const getBalanceNicp = async () => {
    const NICPActor = await getNICPActor(true);
    console.log(NICPActor, 'NICPActor');
    const balanceNICP = await NICPActor.balanceOf(Principal.fromText(principal)).then(r => {
      return r;
    });
    console.log(balanceNICP, 'balanceNICP');
    props.setNDP((Number(balanceNICP) / 1e8).toString());
  };

  const transfer = async () => {
    setTransferLoading(true);
    setTransferText('In Sync Block... ');
    const NICPActor = await getNICPActor(true);
    const res = await NICPActor.transfer(
      Principal.fromText(props.principalText),
      BigInt(Number(props.number) * 1e8)
    ).then(r => {
      console.log(r);
      return r;
    });
    //@ts-ignore
    if (res.Ok > 0) {
      setTransferLoading(false);
      setTransferText('Transfer');
      props.cancelConfirm();
      props.cancelFrom();
      message.success({ content: 'Transfer success', duration: 3 });
    } else {
      setTransferLoading(false);
      setTransferText('Transfer');
      props.cancelConfirm();
      message.error({ content: 'Transfer error', duration: 3 });
    }
  };

  return (
    <div className="airdrops">
      <div className="airdrops-wrapper">
        <div className="airdrops-content">
          <div className="airdrops-ready">Ready to transfer NDP?</div>
          <div className="airdrops-content-item airdrops-email">
            Prinical
            <div className="mr-8">{props.principalText}</div>
          </div>
          <div className="airdrops-content-item airdrops-code">
            NDP
            <div className="mr-8">{props.number}</div>
          </div>
        </div>
        <div className="airdrops-footer">
          <button className="airdrops-cancel" onClick={() => props.cancelConfirm()}>
            Cancel
          </button>
          <button className="airdrops-claim" onClick={() => transfer()}>
            <div className="mr-4">{transferText} </div>
            <RingLoader color={'#0c0633'} loading={isTransferLoading} size={18} />
          </button>
        </div>
      </div>
      <Loading isLoading={isloading} changeState={() => setIsLoading(isloading)} />
    </div>
  );
};

export default confirm;
