import React from 'react';
import Card from '../components/Card';
const Index = () => {
  const cardList = [
    {
      width: '22%',
      url: '111',
      title: '',
      content: '',
      number: '',
      isCreated: true,
    },
    {
      width: '20%',
      url: '111',
      title: 'Patrick',
      content: 'An organization of DAOs officially sponsored by NnsDAO.',
      number: '70 members',
      isCreated: false,
    },
    {
      width: '20%',
      url: '111',
      title: 'Japan DAOs',
      content: 'DAOs initiated by the Japanese community, it provides work, collaboration.',
      number: '70 members',
      isCreated: false,
    },
    {
      width: '20%',
      url: '111',
      title: 'Workout',
      content: 'it provides work',
      number: '80 members',
      isCreated: false,
    },
    {
      width: '20%',
      url: '111',
      title: 'Gaming',
      content: '',
      number: '80 members',
      isCreated: false,
    },
    {
      width: '20%',
      url: '111',
      title: 'Hiking',
      content: '',
      number: '80 members',
      isCreated: false,
    },
    {
      width: '20%',
      url: '111',
      title: 'Yoga',
      content: '',
      number: '80 members',
      isCreated: false,
    },
  ];
  return (
    <>
      <div className=" wrapper flex flex-col items-start ">
        <div className="my-wallet">Dashboard</div>

        <div className="w-full  flex flex-wrap justify-center items-center">
          <div className="w-full  flex flex-wrap justify-start ">
            {cardList.map(item => (
              <div style={{ width: '25%' }}>
                <div className='w-200px'>
                  <Card isCreate={item.isCreated} url={item.url} title={item.title} content={item.content} number={item.number} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
