import { Principal } from '@dfinity/principal';
import { message } from 'antd';
import React, { useState } from 'react';
import Loading from '../../../components/Loading';
import { getNICPActor } from '../../../service/index';
const Transfer = (props: any) => {
  const accountId = window.localStorage.getItem('accountId');
  const principal = window.localStorage.getItem('principal') as string;
  let transferPrincipalValue: HTMLInputElement;
  let transferNICPValue: HTMLInputElement;
  const [isloading, setIsLoading] = useState(false);
  // const [transferNICP, setTransferNICP] = useState(0);
  // const [transferPrincipal, setTransferPrincipal] = useState('');
  // const [isShowAirdrop, setIsShowAirdrop] = useState(false);

  const getBalanceNicp = async () => {
    const NICPActor = await getNICPActor({ needAuth: true });
    const balanceNICP = await NICPActor.balanceOf(Principal.fromText(principal)).then(r => {
      return r;
    });
    console.log(balanceNICP, 'balanceNICP');
    return Number(balanceNICP) / 1e8;
  };

  const transferNICPTest = async () => {
    const NICPActor = await getNICPActor({ needAuth: true });
    const transferPrincipal = transferPrincipalValue.value as string;
    console.log(transferPrincipal, 'transferPrincipal');

    const res = await NICPActor.transfer(Principal.fromText(transferPrincipal), BigInt(Number(transferNICPValue?.value!) * 1e8)).then(r => {
      console.log(r);
      return r;
    });
    console.log(res, 'transferNICPTest');

    return res;
  };
  const transfer = async () => {
    setIsLoading(true);
    const transferPrincipal = transferPrincipalValue.value;
    const transferNICP = Number(transferNICPValue.value!);
    if (transferNICP > 0 && transferPrincipal) {
      const balanceNICP = await getBalanceNicp();
      console.log(balanceNICP >= Number(transferNICP), 'balanceNICP >= transferNICPValue.value');

      if (balanceNICP >= Number(transferNICP)) {
        const res = await transferNICPTest();
        //@ts-ignore
        if (res.Ok > 0) {
          setIsLoading(false);
          message.success({ content: 'Transfer success', duration: 3 });
        } else {
          setIsLoading(false);
          message.error({ content: 'Transfer error', duration: 3 });
        }
      }
    } else {
      setIsLoading(false);
      message.error({ content: 'Enter NICP or Principal', duration: 3 });
    }
  };

  return (
    <div className="airdrops">
      <div className="airdrops-wrapper">
        <div className="airdrops-content">
          <div className="airdrops-ready">Ready to transfer NICP?</div>
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
                  }
                }}
                defaultValue=""
                placeholder="Enter a Principal..."
              />
            </div>
          </div>
          <div className="airdrops-content-item airdrops-code">
            NICP
            <div className="mr-8">
              <input
                type="Number"
                ref={input => {
                  if (input) {
                    transferNICPValue = input;
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
          <button className="airdrops-claim" onClick={() => transfer()}>
            Transfer
          </button>
        </div>
      </div>
      <Loading isLoading={isloading} changeState={() => setIsLoading(isloading)} />
    </div>
  );
};
export default Transfer;
