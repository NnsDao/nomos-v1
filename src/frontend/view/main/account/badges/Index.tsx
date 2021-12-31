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
  const badgesStatus = Array.prototype.isPrototypeOf(prop.badgesList[0]) && prop.badgesList[0].length === 0;
  return (
    <div>
      <div className="title-text">
        <span>Badges</span>
      </div>
      <div className="badges">
        {!badgesStatus ? (
          prop.badgesList.map((item, idx) => (
            <div className="w-1/5 mr-20" key={idx}>
              <Badges data={item[0].data} desc={item[0].desc} name={item[0].name} requtation={item[0].requtation} token={item[0].token} />
            </div>
          ))
        ) : (
          <div className="text-sm font-medium mb-4">Oops. You have not received any badges yet.</div>
        )}
      </div>
    </div>
  );
};
export default Index;
