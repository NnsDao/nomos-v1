import React from 'react';
import nnsdaoLogo from '../assets/nnsdao-logo-200.png';
import './loadingStyle.css';

type Prop = {
  isLoading?: boolean;
  changeState: Function;
};

const loading = (props: Prop) => {
  return (
    <>
      <div className={props.isLoading ? 'loading-wrapper' : 'hidden'}>
        <div className="loading">
          <img src={nnsdaoLogo} />
        </div>
      </div>
    </>
  );
};
export default loading;
