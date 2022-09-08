import React from 'react';
import Card from '../../../main/components/Card';
import './index.css';

const Index = () => {
  return (
    <div>
      <div className="title-text">
        <span>Activity</span>
      </div>
      <div className="flex justify-between">
        <div className="w-1/5">
          <Card url="11" title={'Patrick Genesis NFT'} content={' NnsDAO.'} number={'#000'} />{' '}
        </div>
        <div className="w-1/5">
          <Card url="11" title={'Patrick Genesis NFT'} content={' NnsDAO.'} number={'#000'} />{' '}
        </div>
        <div className="w-1/5">
          <Card url="11" title={'Patrick Genesis NFT'} content={' NnsDAO.'} number={'#000'} />{' '}
        </div>
        <div className="w-1/5">
          <Card url="11" title={'Patrick Genesis NFT'} content={' NnsDAO.'} number={'#000'} />{' '}
        </div>
      </div>
    </div>
  );
};
export default Index;
