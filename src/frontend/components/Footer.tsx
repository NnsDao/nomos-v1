import React from 'react';
import google from '../assets/home/google.png';
import IosDownload from '../assets/home/ios_download.png';
import marketplace from '../assets/home/marketplace.png';
import windowStore from '../assets/home/window.png';
const footer = () => {
  const inactiveClass = 'text-white opacity-50 transform hover:scale-90 cursor-pointer';
  return (
    <>
      <div className={'w-840px mx-auto flex justify-between items-start   '}>
        <img src={marketplace} width={'135px'} height={'45px'} alt="" />
        <img src={windowStore} width={'135px'} height={'45px'} alt="" />
        <img src={google} width={'135px'} height={'45px'} alt="" />
        <img src={IosDownload} width={'135px'} height={'45px'} alt="" />
      </div>
      <div className={'w-840px mx-auto mt-200px mb-4 pb-8 flex justify-between items-start  text-white '}>
        <span className={inactiveClass}>Nomos</span>
        <span className={inactiveClass}>Story</span>
        <span className={inactiveClass}>VRG</span>
        <span className={inactiveClass}>Partners</span>
      </div>
      <div className="w-full h-px  bg-opacity-10 bg-white"></div>
      <div className=" mx-auto my-7 text-left text-white pb-5 text-sl opacity-50">@ 2021, NnsDAO Labs</div>
    </>
  );
};
export default footer;
