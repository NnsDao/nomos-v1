import BigNumber from 'bignumber.js';
import React, { useState } from 'react';
import nnsdaoLogo from '../../../assets/nnsdao-logo-200.png';
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
  const [walletList, setWalletList] = useState([
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
  // {
  //   name: 'Abstract Moon',
  //   tokenName: 'MOON',
  //   balance: 66,
  //   price: 77,
  //   isClaim: true,
  //   isMint: false,
  // },
  // {
  //   name: 'NnsDAO Protocol',
  //   tokenName: 'NDP',
  //   balance: 88,
  //   price: 99,
  //   isClaim: true,
  //   isMint: true,
  // },

  const getBalanceParams = {
    token: 'NDP',
    user: { address: window.localStorage.getItem('accountId') },
  };
  const getBalance = async () => {
    const NDP = await NdpService.getBalance(getBalanceParams);
    setNDP(new BigNumber(NDP.ok.toString()).div(new BigNumber('100000000')).toString());
  };
  getBalance();

  const claim = async () => {
    const bool = await NdpService.getClaim();
    if (bool.ok) {
      console.log('okkkkkk');
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
      return;
    }
    return;
  };
  claim();

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
          <span className="ml-2 font-medium text-sm">({accountId || 0})</span>
        </div>
        <div className="balance-wrapper">
          <div className="base-balance total ">
            <span className="balance-text">Total balance</span>
            <span className="balance-number">${totalbalance || 0}</span>
          </div>
          <div className="base-balance balance ">
            <span className="balance-text">Balance ICP</span>
            <span className="balance-number">{balanceICP || 0}</span>
          </div>
          <div className="base-balance ndp ">
            <span className="balance-text">NDP</span>
            <span className="balance-number">{ndp || 0}</span>
          </div>
          <div className="base-balance nft ">
            <span className="balance-text">NFTs</span>
            <span className="balance-number">{nfts || 0}</span>
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
            <div className="w-full mb-5 h-240px ">
              <div className="w-full flex justify-center">
                <span className="table-token">Token</span>
                <span className="table-balance">Balance</span>
                <span className="table-price">Price</span>
                <span className="table-action">Action</span>
              </div>
              <hr />

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
                    <span className="text-white">{item.balance}</span>
                  </div>
                  <div className="table-price flex flex-col justify-center items-start">
                    <span style={{ color: '#50E3C2' }}> {item.price}</span>
                  </div>
                  <div className="table-action flex  justify-between items-center">
                    {item.isClaim ? <button className=" table-content-button">Claim</button> : ''}
                    {item.isMint ? <button className=" table-content-button">Mint</button> : ''}
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
