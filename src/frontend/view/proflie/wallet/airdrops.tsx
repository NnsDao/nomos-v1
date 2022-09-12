import { message } from 'antd';
import React, { useState } from 'react';
import Loading from '../../../components/Loading';
import { useUserStore } from '../../../hooks/userStore';
import NdpService from '../../../utils/NdpService';
const Airdrop = () => {
  const userStore = useUserStore();
  const accountId = userStore.accountId;
  let emailValue: any = '';
  let codeValue: any = '';
  const [isloading, setIsLoading] = useState(false);

  const [isShowAirdrop, setIsShowAirdrop] = useState(false);
  const dropExchange = async (email: string, code: string) => {
    const Params = {
      email: email,
      code: code,
    };
    try {
      const result = await NdpService.dropExchange(Params);
      setIsLoading(false);
      changeShowAirdrop();
      if (result.err) {
        message.error({ content: result.err, duration: 3 });
      } else {
        message.success({ content: 'The redemption is successful.', duration: 3 });
        // getBalance();
      }
    } catch (err) {
      setIsLoading(false);
      changeShowAirdrop();
      console.log('dropExchange', err);
    }
  };

  // const getBalance = async () => {
  //   const getBalanceParams = {
  //     token: 'NDP',
  //     user: { address: userStore.accountId },
  //   };
  //   try {
  //     const NDP = await NdpService.getBalance(getBalanceParams);
  //     setNDP(new BigNumber(NDP.ok.toString()).div(new BigNumber('100000000')).toString());
  //   } catch (error) {
  //     console.error('getBalance', error);
  //   }
  // };
  const isEmail = (str: string) => {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
  };
  const isCode = (str: string) => {
    return str.length === 6;
  };
  const changeShowAirdrop = () => {
    setIsShowAirdrop(!isShowAirdrop);
  };
  const submit = () => {
    const email = emailValue.value;
    const code = codeValue.value;

    if (email && code) {
      if (isCode(code)) {
        setIsLoading(true);
        dropExchange(email, code);
      } else {
        message.warning({ content: 'Enter the correct email address or code', duration: 2 });
      }
    } else {
      message.warning({ content: 'Enter form', duration: 2 });
    }
  };
  return (
    <div className="airdrops">
      <div className="airdrops-wrapper">
        <div className="airdrops-content">
          <div className="airdrops-ready">Ready to airdrops?</div>
          <div className="airdrops-content-item airdrops-address">
            Address
            <div>{accountId}</div>
          </div>
          <div className="airdrops-content-item airdrops-email">
            Email
            <div className="mr-8">
              <input type="text" ref={input => (emailValue = input)} placeholder="Enter a email..." />
            </div>
          </div>
          <div className="airdrops-content-item airdrops-code">
            Airdrop redemption code
            <div className="mr-8">
              <input type="text" ref={input => (codeValue = input)} placeholder="Enter a code..." />
            </div>
          </div>
        </div>
        <div className="airdrops-footer">
          <button className="airdrops-cancel" onClick={() => changeShowAirdrop()}>
            Cancel
          </button>
          <button className="airdrops-claim" onClick={() => submit()}>
            Claim
          </button>
        </div>
      </div>
      <Loading isLoading={isloading} changeState={() => setIsLoading(isloading)} />
    </div>
  );
};
export default Airdrop;
