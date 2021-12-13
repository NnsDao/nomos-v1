import { Avatar } from 'antd';
import Card from '../components/Card';
import React from 'react';
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
  const walletList: Array<tokenItem> = [
    {
      name: 'NnsDAO Protocol',
      tokenName: 'NDP',
      balance: 0.0,
      price: 0.15,
      isClaim: false,
      isMint: true,
    },
    {
      name: 'Abstract Moon',
      tokenName: 'MOON',
      balance: 66,
      price: 77,
      isClaim: true,
      isMint: false,
    },
    {
      name: 'NnsDAO Protocol',
      tokenName: 'NDP',
      balance: 88,
      price: 99,
      isClaim: true,
      isMint: true,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-start wrapper ">
        <div className="my-wallet">My Wallet</div>
        <div className="balance-wrapper">
          <div className="base-balance total ">
            <span className="balance-text">Total balance</span>
            <span className="balance-number">${'111'}</span>
          </div>
          <div className="base-balance balance ">
            <span className="balance-text">Balance ICP</span>
            <span className="balance-number">{'111'}</span>
          </div>
          <div className="base-balance ndp ">
            <span className="balance-text">NDP</span>
            <span className="balance-number">{'1111'}</span>
          </div>
          <div className="base-balance nft ">
            <span className="balance-text">NFTs</span>
            <span className="balance-number">{'22222'}</span>
          </div>
        </div>
        <div className="token-table">
          <div className="mb-5">
            <span className="table-button">Token</span>
            <span className="table-button table-button2">NFTs</span>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-center">
              <span className="table-token">Token</span>
              <span className="table-balance">Balance</span>
              <span className="table-price">Price</span>
              <span className="table-action">Action</span>
            </div>
            <hr />

            {walletList.map(item => (
              <div className="w-full flex justify-center mt-6">
                <div className="flex justify-start items-center table-token">
                  <div>
                    <Avatar size={62} />
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
        </div>
        <div className="w-full my-10 ">
          <div className='w-200px'>
            <Card url="11" title={'title'} content={'daos daon dao dao dao '} number={'19899'} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
