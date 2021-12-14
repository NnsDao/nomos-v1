import { Collapse, Input, message } from 'antd';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer'

import Collaboration from '../assets/home/Collaboration.png';
import DAOs from '../assets/home/DAO.png';
import Holder from '../assets/home/Holder.png';
import Moon from '../assets/home/Moon.png';

import earth1 from '../assets/home/patrickearth_1.png';
import earth2 from '../assets/home/patrickearth_2.png';
import earth3 from '../assets/home/patrickearth_3.png';
import earth9 from '../assets/home/patrickearth_9.png';

import Roadmap from '../assets/home/Roadmap.png';
import Statistic from '../assets/home/Statistic.png';
import copy from '../assets/home/copy.png';

import state0 from '../assets/home/state0.png';
import state1 from '../assets/home/state1.png';
import state2 from '../assets/home/state2.png';
import state3 from '../assets/home/state3.png';
import state4 from '../assets/home/state4.png';

import './index.css';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
export default function index(prop: any) {
  const activeClass = 'text-white transition delay-150 duration-500 cursor-pointer';
  const inactiveClass = 'text-white opacity-50 transform hover:scale-90 cursor-pointer';
  const [link, setLink] = useState('');
  const linkList = ['Story', 'WorkFlow', 'FAQs', 'NnsDAO'];
  const daoList = [
    {
      url: earth1,
      text: 'Patrick',
    },
    {
      url: earth9,
      text: 'Japan DaoAssociation',
    },
    {
      url: earth3,
      text: 'BitcoinDao',
    },
    {
      url: earth2,
      text: 'BitcoinDao',
    },
  ];
  const featuresList = [
    {
      url: Collaboration,
      title: 'Collaboration',
      text: 'By earning NDPs and other Tokens through collaboration, work is not a dull game.',
    },
    {
      url: DAOs,
      title: 'DAOs',
      text: 'Each DAOs has its own niche and membership, and they can speak freely and create products.',
    },
    {
      url: Roadmap,
      title: 'Roadmap',
      text: 'Different milestones at different stages will reach different goals, and when the moon landing plan of the smart contract is met, it will be independent when a new plan is driven.',
    },
    {
      url: Statistic,
      title: 'Statistic',
      text: 'Through Github, members evaluate each other, the workload and work results of each person are counted, and ultimately voted on by DAOn.',
    },
    {
      url: Moon,
      title: 'Moon',
      text: 'Whenever a project meets the moon landing plan and new milestone stages, a new flow pool is formed to give back to users who hold NDPs and virtual reputations.',
    },
    {
      url: Holder,
      title: 'Holder',
      text: 'For Holder, they enjoy the lasting benefits of the project, which will be incentivized through GameFi, NFTs, Marketplace, Token issuance, etc.',
    },
  ];
  const [work, setWork] = useState('Architecture');

  const workFlowList = [
    {
      text: 'Architecture',
    },
    {
      text: 'DAOn',
    },
    {
      text: 'Work',
    },
  ];
  //Collapse
  const { Panel } = Collapse;
  const faqList = [
    {
      frequently: '1',
      questions: '1',
    },
    {
      frequently: '2',
      questions: '2',
    },
    {
      frequently: '3',
      questions: '3',
    },
  ];
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const nnsdaoAddress = 'b42b8aa849ad9617b9dbb5080ffaa8e7cadd1e6b8dc6b7985c51512a02261944'
  const isLogin = window.isLogin
  let history = useHistory();
  const goStory = () => {
    console.log(111);

    history.push('/story')
  }
  const goProduct = () => {
    history.push('/product')
  }
  const copyAddress = () => {
    if (isLogin) {
      navigator.clipboard.writeText(nnsdaoAddress)
      message.info("The account address has been copied to the clipboard");
    } else {
      history.push('/login')
    }
  }
  const [contributesImg, setContributesImg] = useState(state0);

  const changeContributesImg = (currentContributes: number) => {
    if (currentContributes > 0 && currentContributes < 0.25) {
      setContributesImg(state1)
    } else if (currentContributes >= 0.25 && currentContributes < 0.5) {
      setContributesImg(state2)
    } else if (currentContributes >= 0.5 && currentContributes < 0.75) {
      setContributesImg(state3)
    } else {
      setContributesImg(state4)
    }
  }



  return (
    <>
      <div className="w-full m-auto bg-primary ">
        <div className="p-4 sticky top-0 bg-primary z-10">
          <div className="flex justify-between items-center max-w-1200px m-auto">
            <div className={'flex jsutify-between items-center'}>
              <div className=" flex  space-x-10 flex jsutify-between items-center ">
                {linkList.map((item, index) => (
                  item !== "Story" ?
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={() => {
                        setLink(item)
                      }}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${link === item ? activeClass : inactiveClass} ${index > 4 ? 'ml-4' : ''}`}>
                      <span key={item} className={''}>
                        {item}
                      </span>
                    </a> :
                    <span onClick={() => {
                      goStory()
                    }}
                      key={item} className={`px-3 py-2  rounded-md text-sm font-medium ${link === item ? activeClass : inactiveClass} ${index > 4 ? 'ml-4' : ''}`}>
                      {item}
                    </span>
                ))}
              </div>
            </div>
            <Link to="/login">
              <div className={'w-32 h-12 rounded-3xl bg-sign text-white flex justify-center items-center'}>{'Sign up'}</div>

            </Link>
          </div>
        </div>
        <div className="w-screen h-screen home-bg px-4">
          <div className="max-w-1200px flex flex-wrap  m-auto items-center pt-240px">
            <div className={'flex flex-col justify-content items-start text-white '}>
              <span className={'text-4xl font-mono mb-4'}> Find Your </span>
              <span className={'text-4xl font-mono mb-4'}> Favourite </span>
              <span className={'text-4xl font-mono mb-4'}> DAOn or DAOs </span>
              <span className={'text-base mb-20'}> The next generation of blockchain consensus is DAO </span>
              <div className={'relative'}>
                <Input
                  style={{
                    width: '306px',
                    height: '45px',
                    background: 'rgba(225, 225, 225, 0.13)',
                    borderColor: '#3F62E4',
                    color: 'white',
                  }}
                  placeholder="Enter your desired dao"
                />
                <Link to="/main">
                  <span className={'absolute bottom-1 right-1 px-4 py-2 rounded text-white  buttonGradient cursor-pointer'}>Let's Go</span>
                </Link>

              </div>
            </div>
          </div>
        </div>
        <div className="max-w-1200px m-auto mt-200px text-white text-left px-4">
          <div className="text-4xl font-mono mb-4">DAOs Fund</div>
          <div className="text-base mt-8">The DAO fund belongs to every user who contributes.</div>
          <div className=''>
            <div className='mt-20 mb-10 '>
              {
                <img className='' src={contributesImg} alt="" width={'1235px'} height={'300px'} />
              }
            </div>
            <div>
              <p className='text-center mb-5 -ml-10'>
                Contribute with stoicwallet wallet authorization (otherwise you can't participate in claim):
              </p>
              <div className='daos-address ' onClick={copyAddress}>
                <span className={`mr-4  + ${isLogin ? '' : 'filter'}`}>{nnsdaoAddress}</span>
                <img className='' src={copy} width={'19px'} height={'19px'} alt="" />
              </div>
            </div>

          </div>

          <div className='my-10'>
            <span className='mr-6'>Hotness data per phase</span>
            <button onClick={() => goProduct()} className='rounded text-white px-5 py-2.5 buttonGradient cursor-pointer'>Contribute Detail</button>
          </div>
          <div> Canvas </div>
          <p className='mt-6 text-center ' >(6650,9674.804) indicates that 6650 ICPs are currently donated, and the calculated NDP cost price is 0.0009674804 ICP.</p>
        </div>
        <div className="max-w-1200px m-auto mt-200px text-white text-left px-4">
          <div className="text-4xl font-mono mb-4">Every DAOs is unique</div>
          <div className="text-base ">Join different DAOn's to brainstorm and collide with your own DAOs</div>
          <div className="flex justify-between mt-24">
            {daoList.map(item => (
              <div key={item.url} className={'w-1/5 flex flex-col justify-content items-center transform hover:text-pink-400 hover:scale-125 transition duration-500  '}>
                <div>
                  <img src={item.url} alt="" width={'224px'} height={'224px'} />
                </div>
                <div className={'mt-12'}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-1200px m-auto mt-200px px-4 text-white ">
          <div className="text-4xl font-mono mb-4">Features</div>
          <div className="text-base ">DAOs To Earn</div>
          <div className="flex mt-24 justify-evenly items-stretch flex-wrap">
            {featuresList.slice(0, 3).map((item, index) => (
              <div key={index} style={{ background: 'linear-gradient(180deg, #3A4FE7, #C931B5)' }} className="featuresList-item mb-6">
                <div className={'flex items-center '}>
                  <img src={item.url} alt="" width={'29px'} height={'29px'} />
                  <span className={'text-xl ml-2'}>{item.title}</span>
                </div>
                <div className={'mt-16 text-left'}>{item.text}</div>
              </div>
            ))}
          </div>
          <div className="flex mt-24 flex-wrap justify-evenly items-stretch">
            {featuresList.slice(3).map((item, index) => (
              <div key={index} style={{ background: 'linear-gradient(180deg, #3A4FE7, #C931B5)' }} className="featuresList-item mb-6">
                <div className={'flex items-center '}>
                  <img src={item.url} alt="" width={'29px'} height={'29px'} />
                  <span className={'text-xl ml-2'}>{item.title}</span>
                </div>
                <div className={'mt-16 text-left'}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div id="WorkFlow" className="max-w-1200px mx-auto mt-200px px-4 text-white ">
          <div className="text-4xl font-mono mb-4">Work Flow</div>
          <div className="text-base ">You can be a boss, you just work for yourself. </div>
          <div className=" w-1200px h-500px flex flex-row justify-center items-center  my-24 ">
            <div className="flex h-500px flex-col justify-around ">
              {workFlowList.map((item, index) => (
                <div key={index} className={'ml-2 flex w-150px h-91px justify-center items-center  ' + `${work === item.text ? 'avtive-work' : 'work-flow'}`} onClick={() => setWork(item.text)}>
                  <div className={'text-3xl '}>{item.text}</div>
                </div>
              ))}
            </div>

            <div className={'flex-grow h-500px -ml-4 ' + `${work === 'Architecture' ? 'architecture' : work === 'DAOn' ? 'DAOn' : 'work'}`}></div>
          </div>
        </div>
        <div className={'max-w-1200px m-auto mt-200px flex flex-col justify-content items-start  text-white '}>
          <span className={'text-4xl font-mono mb-4'}>Virtual Reputation Governance</span>
          <div className={'mx-auto '}>
            <div className={'flex-grow m-auto -ml-4 w-1000px  h-1000px reputation '}></div>
          </div>
        </div>
        <div id="FAQs" className={'max-w-1200px m-auto mt-100px  flex flex-col justify-content items-start  text-white '}>
          <span className={'text-4xl font-mono mb-4'}>FAQs</span>
          <div className={' w-1200px flex flex-wrap justify-between my-24 text-white '}>
            <Collapse defaultActiveKey={['1']} ghost accordion expandIconPosition={'right'}>
              {faqList.map((item, index) => (
                <Panel header={item.frequently} key={index.toString()} forceRender={true}>
                  <p>{item.questions}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
// export default index
