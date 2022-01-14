import { message } from 'antd';
import { BigNumber } from 'bignumber.js';
import React, { useEffect, useState } from 'react';
import nnsdaoLogo from '../../../assets/nnsdao-logo-200.png';
import Share from '../../../components/ShareTwitter';
import NdpService from '../../../utils/NdpService';
import Card from '../components/Card';
import './index.css';
type tokenItem = {
  name: string;
  tokenName: string;
  balance: number;
  price: number;
  isClaim: boolean;
  isMint: boolean;
};
const Index = () => {
  const wallet = [
    {
      name: 'NnsDAO Protocol',
      tokenName: 'NDP',
      balance: 0.0,
      price: 0.15,
      isClaim: false,
      isMint: false,
      icon: nnsdaoLogo,
    },
  ];
  const [walletList, setWalletList] = useState(wallet);
  const getICPBalance = async () => {
    let address = localStorage.getItem('accountId');
    const data = {
      account_identifier: { address },
      network_identifier: {
        blockchain: 'Internet Computer',
        network: '00000000000000020101',
      },
    };
    const res = await fetch('https://rosetta-api.internetcomputer.org/account/balance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json());
    const icp = res.balances![0]!.value / 100000000;
    setBalance(icp);
  };
  const getBalanceParams = {
    token: 'NDP',
    user: { address: window.localStorage.getItem('accountId') },
  };

  const getBalance = async () => {
    try {
      const NDP = await NdpService.getBalance(getBalanceParams);
      setNDP(new BigNumber(NDP.ok.toString()).div(new BigNumber('100000000')).toString());
    } catch (error) {
      console.error('getBalance', error);
    }
  };

  const getClaimStatus = async () => {
    let isUnmount = false;
    let claimStatus = null;
    try {
      claimStatus = await NdpService.getClaimStatus();
    } catch (error) {
      console.log('claimStatus', claimStatus);
    }

    if (claimStatus?.ok && !isUnmount) {
      setWalletList([
        {
          name: 'NnsDAO Protocol',
          tokenName: 'NDP',
          balance: 0.0,
          price: 0.15,
          isClaim: true,
          isMint: false,
          icon: nnsdaoLogo,
        },
      ]);
    } else {
      setWalletList([
        {
          name: 'NnsDAO Protocol',
          tokenName: 'NDP',
          balance: 0.0,
          price: 0.15,
          isClaim: false,
          isMint: false,
          icon: nnsdaoLogo,
        },
      ]);
    }
    return () => (isUnmount = true);
  };

  useEffect(() => {
    getBalance();
  }, []);
  useEffect(() => {
    getICPBalance();
  }, []);
  useEffect(() => {
    getClaimStatus();
  }, []);

  const claim = async () => {
    const bool = await NdpService.getClaim();
    console.log(bool, 'claim');
    if (bool.ok) {
      setWalletList([
        {
          name: 'NnsDAO Protocol',
          tokenName: 'NDP',
          balance: 0.0,
          price: 0.15,
          isClaim: false,
          isMint: false,
          icon: nnsdaoLogo,
        },
      ]);
      getBalance();
      message.success({ content: 'claim Success!', duration: 2 });
    }
  };

  const [active, setActive] = useState('Token');
  const [totalbalance, setTotalBalance] = useState(0);
  const [balanceICP, setBalance] = useState(0);
  const [ndp, setNDP] = useState('0');
  const [nfts, setNFTS] = useState(0);
  const accountId = window.localStorage.getItem('accountId');
  return (
    <>
      <div className="flex flex-col items-start wrapper ">
        <div className="my-wallet">
          My Wallet
          {/* <span className="ml-2 font-medium text-sm">({accountId || 0})</span> */}
        </div>
        <div className="balance-wrapper">
          <div className="base-balance total ">
            <span className="balance-text">Total balance</span>
            <span className="balance-number text-3xl">${totalbalance || 0}</span>
          </div>
          <div className="base-balance balance ">
            <span className="balance-text">Balance ICP</span>
            <span className="balance-number text-3xl">{balanceICP || 0}</span>
          </div>
          <div className="base-balance ndp ">
            <span className="balance-text">NDP</span>
            <span className="balance-number text-3xl">{ndp || 0}</span>
          </div>
          <div className="base-balance nft ">
            <span className="balance-text">NFTs</span>
            <span className="balance-number text-3xl">{nfts || 0}</span>
          </div>
        </div>
        <div className={`token-table + ${active === 'NFTs' ? 'token-table-nfts' : ' '}`}>
          <div className="mb-5">
            <span className={`table-button + ${active === 'Token' ? '' : 'table-button2'}`} onClick={() => setActive('Token')}>
              Token
            </span>
            <span className={`table-button + ${active === 'NFTs' ? '' : 'table-button2'}`} onClick={() => setActive('NFTs')}>
              NFTs
            </span>
          </div>
          {active === 'Token' ? (
            <div className="opacity w-full mb-5 h-240px  ">
              <div className="w-full flex justify-center ">
                <span className="table-token">Token</span>
                <span className="table-balance">Balance</span>
                <span className="table-price">Price</span>
                <span className="table-action">Action</span>
              </div>

              <div className="dividing-line"></div>
              {walletList.map((item, i) => (
                <div className="w-full flex justify-center mt-6" key={i}>
                  <div className="flex justify-start items-center table-token">
                    <div>
                      <img src={item.icon} alt="nnsdao nomos" className="w-20 h-20 rounded-full" />
                    </div>
                    <div className="text-white ml-3  flex flex-col justify-center items-start">
                      <span>{item.name}</span>
                      <span>{item.tokenName}</span>
                    </div>
                  </div>
                  <div className="table-balance flex flex-col justify-center items-start">
                    <span className="text-white">{ndp}</span>
                  </div>
                  <div className="table-price flex flex-col justify-center items-start">
                    <div className="table-price-filter "></div>
                    <span className="table-price-text "> {item.price}</span>
                  </div>

                  <div className="table-action flex   items-center ">
                    {item.isClaim ? (
                      <button
                        className="z-50 text-white table-content-button"
                        onClick={() => {
                          claim();
                        }}>
                        Claim
                      </button>
                    ) : (
                      <button className=" table-content-button cursor-not-allowed ">Claim</button>
                    )}
                    {item.isMint ? <button className=" table-content-button">Mint</button> : ''}
                    <Share />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full my-5 ">
              <div className="w-200px">
                <Card url="11" title={'Patrick Genesis NFT'} content={'Genesis NFT will be distributed to users who have constructive interest in NnsDAO.'} number={'#000'} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Index;
