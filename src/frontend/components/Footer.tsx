import React from 'react';
import deployIc from '../assets/deploy-ic.png';
import jdaLogo from '../assets/jda-logo.png';
import icpswapLogo from '../assets/logo-icpswap.png';
const footer = () => {
  const inactiveClass = 'text-white opacity-50 transform hover:scale-90 cursor-pointer mr-10';
  const goGuide = () => {
    window.open('https://docs.nnsdao.org/docs/nomos/join-contributing');
  };

  const goStory = () => {
    const wins: any = window.open('/story', '_blank');
    wins.focus();
  };

  return (
    <>
      <div className={'w-840px mx-auto flex justify-center mb-5 items-start text-white  '}>
        <span className="text-xl">We Partners</span>
      </div>
      <div className={'w-840px mx-auto flex justify-center items-start'}>
        <img src={jdaLogo} width={'135px'} height={'45px'} alt="" className="mr-14" />
        <img src={icpswapLogo} width={'135px'} height={'45px'} alt="icpswap" />
        {/* <img src={google} width={'135px'} height={'45px'} alt="" /> */}
        {/* <img src={IosDownload} width={'135px'} height={'45px'} alt="" /> */}
      </div>
      <div className={'w-840px mx-auto mt-20 mb-4 pb-8 flex flex-row items-center justify-center'}>
        {/* <span className={inactiveClass}>Nomos</span> */}
        {/* <span
          className={inactiveClass}
          onClick={() => {
            goStory();
          }}>
          Story
        </span>
        <span className={inactiveClass}>VRG</span>
        <span className={inactiveClass} onClick={() => goGuide()}>
          Contribute
        </span> */}
      </div>
      <div className="w-full h-px  bg-opacity-10 bg-white"></div>
      <div className="flex justify-center my-7 text-center text-white pb-5 text-sl opacity-50">
        NnsDAO Labs Limited © 2021. Build on
        <img src={deployIc} className="w-24 h-full ml-2 mt-2" />
      </div>
    </>
  );
};
export default footer;
