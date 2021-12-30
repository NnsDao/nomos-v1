import React from 'react';
import Badges from '../../components/badges';
import './index.css';
type item = {
  data: string;
  desc: string;
  name: string;
  requtation: string;
  token: string;
};
type Prop = {
  badgesList: Array<Array<item>>;
};
const Index = (prop: Prop) => {
  return (
    <div>
      <div className="title-text">
        <span>Badges</span>
      </div>
      <div className="badges">
        {prop.badgesList.map(item => (
          <div className="w-1/5">
            <Badges data={item[0].data} desc={item[0].desc} name={item[0].name} requtation={item[0].requtation} token={item[0].token} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Index;
