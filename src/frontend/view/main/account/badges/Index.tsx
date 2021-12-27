import React from 'react';
import Badges from '../../components/badges';
import './index.css';
const Index = () => {
  const badgesList = [
    {
      text: 'BADGE-PKM-UNITED-EXAMPLE',
    },
    {
      text: 'BADGE-TEMPLATE',
    },
    {
      text: 'BADGE-POKEBOLA-EXAMPLE',
    },
    {
      text: 'BADGE-PKM-UNITED-EXAMPLE',
    },
  ];
  return (
    <div>
      <div className="title-text">
        <span>Badges</span>
      </div>
      <div className="badges">
        {badgesList.map(item => (
          <div className="w-1/5">
            <Badges text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Index;
