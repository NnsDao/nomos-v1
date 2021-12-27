import React from 'react';
import { Share } from '../../../node_modules/react-twitter-widgets';

const ShareTwitter = () => {
  return (
    <div className="share-twitter">
      <Share url="https://h637e-ziaaa-aaaaj-aaeaa-cai.raw.ic0.app/" options={{ hashtags: 'NDP,DAOs,ICP', dnt: true }} />
    </div>
  );
};
export default ShareTwitter;
