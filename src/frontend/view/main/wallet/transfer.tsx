import { Principal } from '@dfinity/principal';
import { message } from 'antd';
import React, { useState } from 'react';
import { RingLoader } from 'react-spinners';

import { getNICPActor } from '../../../service/index';
import Confirm from './confirm';
const Transfer = (props: any) => {
  const [isConfirmLoading, setConfirmLoading] = useState(false);

  const accountId = window.localStorage.getItem('accountId');
  const principal = window.localStorage.getItem('principal') as string;
  let transferPrincipalValue: any = '';
  let transferNICPValue: any = '';
  const [principalText, setPrinipal] = useState('');
  const [number, setNumber] = useState(BigInt(0));
  const [isConfirm, setConfirm] = useState(false);
  const getBalanceNicp = async () => {
    const NICPActor = await getNICPActor(true);
    const balanceNICP = await NICPActor.balanceOf(Principal.fromText(principal)).then(r => {
      return r;
    });
    console.log(balanceNICP, 'balanceNICP');
    return Number(balanceNICP) / 1e8;
  };

  const checkBalance = async () => {
    const transferPrincipal = transferPrincipalValue.value;
    const transferNICP = Number(transferNICPValue.value!);

    if (transferNICP > 0 && transferPrincipal) {
      setConfirmLoading(true);
      const balanceNICP = await getBalanceNicp();
      setConfirmLoading(false);
      if (balanceNICP >= Number(transferNICP)) {
        setConfirm(true);
      } else {
        setConfirmLoading(false);
        message.error({ content: 'Insufficient balance.', duration: 3 });
      }
    } else {
      message.error({ content: 'Enter NICP or Principal', duration: 3 });
    }
  };

  return (
    <div className="airdrops">
      <div className="airdrops-wrapper">
        <div className="airdrops-content">
          <div className="airdrops-ready">Ready to transfer NDP?</div>
          <div className="airdrops-content-item airdrops-address">
            Address
            <div>{accountId}</div>
          </div>
          <div className="airdrops-content-item airdrops-email">
            Prinical
            <div className="mr-8">
              <input
                type="text"
                ref={input => {
                  if (input) {
                    transferPrincipalValue = input;
                    setPrinipal(transferPrincipalValue.value);
                  }
                }}
                defaultValue=""
                placeholder="Enter a Principal..."
              />
            </div>
          </div>
          <div className="airdrops-content-item airdrops-code">
            NDP
            <div className="mr-8">
              <input
                type="Number"
                ref={input => {
                  if (input) {
                    transferNICPValue = input;
                    setNumber(transferNICPValue.value);
                  }
                }}
                defaultValue=""
                placeholder="Enter a NICP..."
              />
            </div>
          </div>
        </div>
        <div className="airdrops-footer">
          <button className="airdrops-cancel" onClick={() => props.cancel()}>
            Cancel
          </button>
          <button className="airdrops-claim" onClick={() => checkBalance()}>
            <div className="mr-4">Confirm </div>
            <RingLoader color={'#0c0633'} loading={isConfirmLoading} size={18} />
          </button>
        </div>
      </div>
      {isConfirm ? <Confirm principalText={principalText} number={number} setNDP={val => props.setNDP(val)} cancelConfirm={() => setConfirm(false)} cancelFrom={() => props.cancel()}></Confirm> : null}
    </div>
  );
};
export default Transfer;
