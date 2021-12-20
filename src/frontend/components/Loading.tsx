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
      {props.isLoading ? (
        <div className={' loading-wrapper'}>
          <div className=" loading ">
            <img src={nnsdaoLogo} width={'100px'} height={'100px'} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default loading;
