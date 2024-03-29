import { Principal } from '@dfinity/principal';
import { BigNumber } from 'bignumber.js';
import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import nnsdaoLogo from '../../../assets/nnsdao-logo-200.png';
import { useUserStore } from '../../../hooks/userStore';
import { getNICPActor } from '../../../service/index';
import NdpService from '../../../utils/NdpService';
import Card from '../../main/components/Card';

import './index.css';
import Transfer from './transfer';
type tokenItem = {
  name: string;
  tokenName: string;
  balance: number;
  price: number;
  isClaim: boolean;
  isMint: boolean;
};
const Wallet = () => {
  const userStore = useUserStore();
  let address = userStore.accountId;
  let principal = userStore.principalId;
  const [isOpen, setOpen] = useState(false);
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
  const [listCollection, setUserCollection] = useState([]);
  const getBalanceNicp = async () => {
    const NICPActor = await getNICPActor(true);
    console.log(NICPActor, 'NICPActor');
    const balanceNICP = await NICPActor.balanceOf(Principal.fromText(principal)).then(r => {
      return r;
    });
    console.log(balanceNICP, 'balanceNICP');
    setNDP((Number(balanceNICP) / 1e8).toString());
  };
  const getICPBalance = async () => {
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

  // price  icpUpdateUSD
  // const getIcpPrice = async () => {
  //   const res = await fetch('https://icscan.io/ic/home/generalInfo', {
  //     method: 'GET/HEAD',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({}),
  //   }).then(res => res.json());
  //   // const icp = res.balances![0]!.value / 100000000;
  //   // setBalance(icp);
  //   // try {
  //   //   const prices = await NdpService.icpUpdateUSD();
  //   //   console.log(prices, 909090);
  //   //   setTotalBalance(prices);
  //   // } catch (error) {
  //   //   console.error('getPrice', error);
  //   // }
  // };

  const getBalance = async () => {
    const getBalanceParams = {
      token: 'NDP',
      user: { address: userStore.accountId },
    };
    try {
      const NDP = await NdpService.getBalance(getBalanceParams);
      // @ts-ignore
      setNDP(new BigNumber(NDP.ok.toString()).div(new BigNumber('100000000')).toString());
    } catch (error) {
      console.error('getBalance', error);
    }
  };

  const getClaimStatus = async () => {
    let isUnmount = false;
    let claimStatus = null as any;
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

  const getUserNfts = async () => {
    try {
      const result: any = await NdpService.getUserNfts(address);
      setNFTS(result && result.ok.length);
      setUserCollection(result.ok);
    } catch (error) {
      console.log('getUserNft', error);
    }
  };

  const interval: any = useRef(undefined);
  const syncData = () => {
    interval.current && clearTimeout(interval.current);
    interval.current = setTimeout(async () => {
      await getBalanceNicp();
      syncData();
    }, 1e4);
  };
  useEffect(() => {
    syncData();
    return () => clearInterval(interval.current);
  });
  useEffect(() => {
    getBalanceNicp();
  }, []);

  useEffect(() => {
    getICPBalance();
  }, [address]);
  useEffect(() => {
    getUserNfts();
  }, [address]);

  const claim = async () => {
    const bool = await NdpService.getClaim();
    console.log(bool, 'claim');
    if ('ok' in bool) {
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
      toast.success(`Claim Success!`);
    }
  };

  const [active, setActive] = useState('Token');
  const [totalbalance, setTotalBalance] = useState(0);
  const [balanceICP, setBalance] = useState(0);
  const [ndp, setNDP] = useState('0');
  const [nfts, setNFTS] = useState(0);
  const accountId = userStore.accountId;

  const to32bits = (num: any) => {
    const b = new ArrayBuffer(4);
    new DataView(b).setUint32(0, num);
    return Array.from(new Uint8Array(b));
  };
  const tokenIdentifier = (principal: string, index: any) => {
    //@ts-ignore
    const padding = Buffer.from('\x0Atid');
    const array = new Uint8Array([...padding, ...Principal.fromText(principal).toUint8Array(), ...to32bits(index)]);
    return Principal.fromUint8Array(array).toText();
  };

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
            <span className="balance-number ">${(balanceICP + Number(ndp) / 200).toFixed(4) || 0} ICP</span>
          </div>
          <div className="base-balance balance ">
            <span className="balance-text">Balance ICP</span>
            <span className="balance-number ">{balanceICP.toFixed(4) || 0}</span>
          </div>
          <div className="base-balance ndp ">
            <span className="balance-text">NDP</span>
            <span className="balance-number ">{Number(ndp).toFixed(4) || 0}</span>
          </div>
          <div className="base-balance nft ">
            <span className="balance-text">NFTs</span>
            <span className="balance-number ">{nfts || 0}</span>
          </div>
        </div>
        <div className={`token-table + ${active === 'NFTs' ? 'token-table-nfts' : ' '}`}>
          <div className="mb-5">
            <span
              className={`table-button + ${active === 'Token' ? '' : 'table-button2'}`}
              onClick={() => setActive('Token')}>
              Token
            </span>
            <span
              className={`table-button + ${active === 'NFTs' ? '' : 'table-button2'}`}
              onClick={() => setActive('NFTs')}>
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
                      <img src={item.icon} alt="nnsdao nomos" className="w-70 h-70 rounded-full" />
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
                    <button className="z-50 text-white table-content-button" onClick={() => setOpen(true)}>
                      Transfer
                    </button>
                    {/* {item.isClaim ? (
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
                    <button className=" table-content-button cursor-pointer ml-5 " onClick={() => changeShowAirdrop()}>
                      Airdrops
                    </button> */}

                    {/* {item.isMint ? <button className=" table-content-button">Mint</button> : ''} */}
                    {/* <Share /> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full my-5 ">
              <div className="flex flex-row flex-wrap w-full mx-10">
                {listCollection.map((item, index) => (
                  <Card
                    url={`https://vcpye-qyaaa-aaaak-qafjq-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=${tokenIdentifier(
                      'vcpye-qyaaa-aaaak-qafjq-cai',
                      item[0]
                    )}`}
                    title={'Starfish'}
                    index={index}
                    content={'The first NFTs of the NnsDAO ecosystem.'}
                    number={'#' + item[0]}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {isOpen ? <Transfer cancel={() => setOpen(false)} setNDP={val => setNDP(val)} /> : null}
      {/* <Airdrop /> */}
      {/* {isShowAirdrop ? <Airdrop /> : null} */}
      <Toaster></Toaster>
    </>
  );
};
export default Wallet;
