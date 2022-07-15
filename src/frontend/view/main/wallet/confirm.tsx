import { Principal } from '@dfinity/principal';
import { message } from 'antd';
import React, { useState } from 'react';
import Loading from '../../../components/Loading';
import { getNICPActor } from '../../../service/index';

type Prop = {
  principalText: any;
  number: any;
  cancelConfirm: Function;
  cancelFrom: Function;
};

const confirm = (props: Prop) => {
  const [isloading, setIsLoading] = useState(false);
  const transfer = async () => {
    setIsLoading(true);
    const NICPActor = await getNICPActor({ needAuth: true });
    const res = await NICPActor.transfer(Principal.fromText(props.principalText), BigInt(Number(props.number) * 1e8)).then(r => {
      console.log(r);
      return r;
    });
    //@ts-ignore
    if (res.Ok > 0) {
      setIsLoading(false);
      props.cancelConfirm();
      props.cancelFrom();
      message.success({ content: 'Transfer success', duration: 3 });
    } else {
      setIsLoading(false);
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
            Transfer
          </button>
        </div>
      </div>
      <Loading isLoading={isloading} changeState={() => setIsLoading(isloading)} />
    </div>
  );
};

export default confirm;
