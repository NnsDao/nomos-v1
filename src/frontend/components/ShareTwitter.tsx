import React from 'react';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import NdpService from '../utils/NdpService';
const ShareTwitter = () => {
  const reward = async () => {
    let result = null as any;
    try {
      result = await NdpService.getReward();
      console.log(result);

      // if (result.ok) {
      //   console.log(result);
      //   message.success({ content: `${result.ok}`, duration: 2 });
      // } else if (result.err) {
      //   message.warning({ content: `${result.err}`, duration: 2 });
      // }
    } catch (error) {
      console.log('getReward', error);
    }
  };
  const shareUrl = 'https://h637e-ziaaa-aaaaj-aaeaa-cai.raw.ic0.app/';
  var utc = Date.now() - 4 * 36e5;
  const title = "I just got the NDP token distributed by NnsDAO. ICP Eco's first canister contract-based Token contribution rewards." + ' Share hash index - ' + utc;
  const hashtags = ['NDP', 'DAOs', 'ICP', 'NnsDAO', 'Dfinity', 'IC'];
  return (
    <div className="flex justify-content items-content share-twitter ml-5">
      <TwitterShareButton url={shareUrl} title={title} hashtags={hashtags} onShareWindowClose={() => reward()} className="Demo__some-network__share-button">
        <TwitterIcon size={20} round />
      </TwitterShareButton>
    </div>
  );
};
export default ShareTwitter;
