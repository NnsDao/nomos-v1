import { message } from 'antd';
import React, { useState } from 'react';
import Loading from '../../../components/Loading';
import { getNICPActor } from '../../../service/index';
const Transfer = (props: any) => {
  const accountId = window.localStorage.getItem('accountId');
  const principal = window.localStorage.getItem('principal');
  let transferPrincipal: any = '';
  let transferNICP: any = '';
  const [isloading, setIsLoading] = useState(false);
  // const [transferNICP, setTransferNICP] = useState(0);
  // const [transferPrincipal, setTransferPrincipal] = useState('');
  // const [isShowAirdrop, setIsShowAirdrop] = useState(false);

  const getBalanceNicp = async () => {
    const NICPActor = await getNICPActor({ needAuth: false });
    const balanceNICP = NICPActor.balanceOf(principal);
    return balanceNICP;
  };
  const transferNICPTest = async () => {
    const NICPActor = await getNICPActor({ needAuth: false });
    const res = NICPActor.transfer({ transferPrincipal, transferNICP });
    return res;
  };
  const transfer = async () => {
    console.log(transferNICP);

    console.log(transferNICP, transferNICP > 0);
    console.log(transferPrincipal, 'transferPrincipal');

    if (transferNICP > 0 && transferPrincipal) {
      const balanceNICP = await getBalanceNicp();
      if (balanceNICP > transferNICP) {
        transferNICPTest();
        message.success({ content: 'Transfer success', duration: 3 });
      }
    } else {
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
              <input type="text" ref={input => (transferPrincipal = input?.value)} placeholder="Enter a Principal..." />
            </div>
          </div>
          <div className="airdrops-content-item airdrops-code">
            NICP
            <div className="mr-8">
              <input type="text" ref={input => (transferNICP = input?.value)} placeholder="Enter a NICP..." />
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
