import React from 'react';
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
            <img src="https://pbs.twimg.com/profile_images/1424968108897230848/bxqO9P94_400x400.jpg" width={'100px'} height={'100px'} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default loading;
