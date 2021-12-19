import { Collapse, Input, message } from 'antd';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Collaboration from '../assets/home/Collaboration.png';
import copy from '../assets/home/copy.png';
import creation from '../assets/home/creation.png';
import DAOs from '../assets/home/DAO.png';
import dividing from '../assets/home/dividing-line.png';
import Holder from '../assets/home/Holder.png';
import japandao from '../assets/home/japandao.png';
import Moon from '../assets/home/Moon.png';
import nnsdao from '../assets/home/nnsdao.png';
import earth1 from '../assets/home/patrickearth_1.png';
import earth2 from '../assets/home/patrickearth_2.png';
import earth3 from '../assets/home/patrickearth_3.png';
import earth6 from '../assets/home/patrickearth_6.png';
import Roadmap from '../assets/home/Roadmap.png';
import state0 from '../assets/home/state0.png';
import state1 from '../assets/home/state1.png';
import state2 from '../assets/home/state2.png';
import state3 from '../assets/home/state3.png';
import state4 from '../assets/home/state4.png';
import Statistic from '../assets/home/Statistic.png';
import Neuron from '../assets/neuron.svg';
import { DonateGraph } from '../components/DonateGraph';
import Footer from '../components/Footer';
import './index.css';
export default function index(prop: any) {
  const accountId: string = window.localStorage.getItem('accountId') ? window.localStorage.getItem('accountId') + '' : '';

  // const [count, setCount] = useState<string>();

  // const { data: mintedCount } = useQuery('data', () => TokenInfo.getMinted());

  // console.log('debug', mintedCount);
  // if (mintedCount) {
  //   console.log('debug', mintedCount, new BigNumber(mintedCount.toString()).div(new BigNumber('100000000')).toString());
  // }
  // const getData = async () => {
  //   let mintedCount = TokenInfo.getMinted();
  //   let accountId = TokenInfo.getAccountId();
  //   // @ts-ignore
  //   [mintedCount, accountId] = await Promise.all([mintedCount, accountId]);
  //   console.log('debug', accountId, mintedCount, new BigNumber(mintedCount.toString()).div(new BigNumber('100000000')).toString());
  // };

  // const usePrincipal = window.localStorage.getItem('usePrincipal');
  const isLogin = Boolean(Number(window.localStorage.getItem('isLogin')));

  const contributesAdress = 'cf66e87d469890ca0f1f6504eebce076fa587449e9e325dd597b189347c37908';
  const [totalContributes, setTotalContributes] = useState(14000 * 100000000);
  const [currentContributes, setCurrentContributes] = useState(0);
  const getCurrentContributes = async () => {
    const res = await fetch('https://dapi.nnsdao.com/api/block/search?recorde_addr=' + contributesAdress).then(res => res.json());
    setCurrentContributes(res.data.Balance);
    changeContributesImg(currentContributes / totalContributes);
  };
  getCurrentContributes();

  const activeClass = 'text-white transition delay-150 duration-500 cursor-pointer';
  const inactiveClass = 'text-white opacity-50 transform hover:scale-90 cursor-pointer';
  const [link, setLink] = useState('');
  const linkList = ['NnsDAO', 'Story', 'WorkFlow', 'FAQs'];
  const daoList = [
    {
      url: earth1,
      text: 'Devs',
    },
    {
      url: earth6,
      text: 'Arts',
    },
    {
      url: earth3,
      text: 'Writers',
    },
    {
      url: earth2,
      text: 'Translators',
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
      text: 'Whenever a project meets the moon landing plan and new milestone stages, a new flow pool is formed to give back to users who hodl NDPs and virtual reputations.',
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
    {
      text: 'DAOs',
    },
  ];
  //Collapse
  const { Panel } = Collapse;
  const faqList = [
    {
      frequently: 'What is NnsDAO Protocol?',
      questions: 'NnsDAO is a boundaryless autonomous organization, which provides some basic modular programmable services for building the world of DAOn.',
    },
    {
      frequently: 'What is a DAO fund?',
      questions:
        'NnsDAO Fund is a DAO fund launched based on the protocol, it is a kind of investment DAO created through sponsorship, which allows users to have the right to manage, vote, and select DAOs, mainly layout IC ecological products and NnsDAO own ecological DAOs incubation, whenever new DAOs are created, they can be selected and voted to decide whether they are eligible for DAO Fund if they are eligible The project will be supported and the proceeds will be put into DAO fund, which always belongs to all the sponsored users.',
    },
    {
      frequently: 'What is Patrick Program?',
      questions:
        'Patrick is an activity initiated by NnsDAO. It is an initiative to set up DAOs through the coordination among users and become the founding members, to let the whole DAOs, DAOn working model get practice through different dApps and applications, and to let those who participate in the program get NDP rewards, so that more users can participate in the ecology through early incentives.',
    },
    {
      frequently: 'What are the current DAOs?',
      questions:
        'Currently, we have created two independent organizations, Patrick DAOs and Japan Daos Association, and have reached an initial cooperation agreement. More and more DAOs will be built in the future, and when it reaches 10 DAOs or more, NnsDAO Protocol will start the master protocol, which is a model of governance, equity, reputation, etc. Eventually, it will completely have DAOs, DAOn within the community for governance and development.',
    },
    {
      frequently: 'Why DAOn, DAOs can be split infinitely?',
      questions:
        'The DAO is not single, it is a DAO composed of multiple people collaborating and therefore defined as DAOs, you can learn by reading the NnsDAO whitepaper that each DAOs, DAOn has a cap on the number of people, when a DAOn, DAOs are infinitely scaled and growing, we may need to subdivide the responsibilities of each DAO more and therefore can decide by voting Whether to split this DAO (collection) to further form smaller organizations or called new DAOs.',
    },
  ];

  const history = useHistory();
  const goStory = () => {
    history.push('/story');
  };
  const goProduct = () => {
    history.push('/product');
  };
  const copyAddress = () => {
    if (isLogin) {
      navigator.clipboard.writeText(contributesAdress);
      message.info('The account address has been copied to the clipboard');
    } else {
      history.push('/login');
    }
  };

  const [contributesImg, setContributesImg] = useState(state0);

  const changeContributesImg = (currentContributes: number) => {
    if (currentContributes >= 1) {
      setContributesImg(state4);
    } else if (currentContributes >= 0.75) {
      setContributesImg(state3);
    } else if (currentContributes >= 0.5) {
      setContributesImg(state2);
    } else if (currentContributes >= 0.25) {
      setContributesImg(state1);
    } else {
      setContributesImg(state0);
    }
  };

  return (
    <>
      <div className="w-full m-auto bg-primary ">
        <div className="p-4 sticky top-0 bg-primary z-10">
          <div className="flex justify-between items-center max-w-1200px m-auto">
            <div className={'flex jsutify-between items-center'}>
              <div className=" flex  space-x-10 jsutify-between items-center ">
                {linkList.map((item, index) =>
                  item !== 'Story' ? (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={() => {
                        setLink(item);
                      }}
                      className={`pr-3 py-2 rounded-md text-sm font-medium ${link === item ? activeClass : inactiveClass} ${index > 4 ? 'ml-4' : ''}`}>
                      <span key={item} className={''}>
                        {item}
                      </span>
                    </a>
                  ) : (
                    <span
                      onClick={() => {
                        goStory();
                      }}
                      key={item}
                      className={`px-3 py-2  rounded-md text-sm font-medium ${link === item ? activeClass : inactiveClass} ${index > 4 ? 'ml-4' : ''}`}>
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
            {isLogin ? (
              <Link to="/main">
                <div className={'w-32 h-12 rounded-3xl bg-sign text-white flex justify-center items-center'}>{'Wallet'}</div>
              </Link>
            ) : (
              <Link to="/login">
                <div className={'w-32 h-12 rounded-3xl bg-sign text-white flex justify-center items-center'}>{'Sign up'}</div>
              </Link>
            )}
          </div>
        </div>
        <div className="w-screen h-screen home-bg  relative">
          <div className="max-w-1200px w-1200px m-auto  pt-240px">
            <div className={'flex flex-col justify-content items-start text-white '}>
              <span className={'find-text-title font-mono mb-4'}> Find Your </span>
              <span className={'find-text-title font-mono mb-4'}> Favourite </span>
              <span className={'find-text-title font-mono mb-4'}> DAOn or DAOs </span>
              <span className={'find-text-info mb-20'}> The next generation of blockchain consensus is DAO </span>
              <div className={'relative'}>
                <Input
                  style={{
                    width: '500px',
                    height: '54px',
                    background: 'rgba(225, 225, 225, 0.13)',
                    borderColor: '#3F62E4',
                    borderRadius: '4px',
                    color: 'white',
                  }}
                  placeholder="Enter your desired dao"
                />
                <Link to="/main">
                  <span className="find-lets-go">Let's Go</span>
                </Link>
              </div>
            </div>
          </div>
          <img src={creation} alt="" width={'100px'} height={'100px'} className="creation" />
          <img src={nnsdao} alt="" width={'61.8px'} height={'61.8px'} className="nnsdao" />
          <img src={japandao} alt="" width={'61.8px'} height={'61.8px'} className="japandao" />
        </div>
        <div className="max-w-1200px m-auto mt-200px text-white text-left ">
          <div className="find-text-title font-mono mb-4 flex">
            DAOs Fund (<img src={Neuron} alt="" width={'45px'} height={'45px'} />,<img src={Neuron} alt="" width={'45px'} height={'45px'} /> )
          </div>
          <div className="find-text-info mt-8">The DAO fund belongs to every user who contributes.</div>
          <div className="">
            <div className="mt-20 mb-10 ">{<img className="" src={contributesImg} alt="" width={'1235px'} height={'300px'} />}</div>
            <div>
              <p className="find-text-info text-center mb-5 -ml-10">Contribute with stoicwallet wallet authorization (otherwise you can't participate in claim):</p>
              <div className="daos-address " onClick={copyAddress}>
                <span
                  className={`mr-4  + 
                  ${isLogin ? '' : ' filter '}`}>
                  {contributesAdress}
                </span>
                <img className="" src={copy} width={'19px'} height={'19px'} alt="" />
              </div>
            </div>
          </div>

          <div className="my-10">
            <span className="mr-6 find-text-info text-2xl">Hotness data per phase</span>
            <button onClick={() => goProduct()} className="rounded text-white px-5 py-2.5 buttonGradient cursor-pointer mr-3">
              Contribute Guide
            </button>
            <button onClick={() => goProduct()} className="rounded text-white px-5 py-2.5 buttonGradient cursor-pointer ">
              Contribute Detail
            </button>
          </div>
          {/* <div> Canvas </div> */}
          <DonateGraph></DonateGraph>
          <p className="mt-6 text-center ">(6650,9674.804) indicates that 6650 ICPs are currently contributed, and the calculated NDP cost price is 0.0009674804 ICP.</p>
        </div>
        <div className="max-w-1200px m-auto mt-200px text-white text-left px-4">
          <div className="find-text-title font-mono mb-4">Every DAOn is unique</div>
          <div className="find-text-info">Join different DAOn's to brainstorm and collide with your own DAOs</div>
          <div className="flex justify-between mt-24">
            {daoList.map(item => (
              <div key={item.url} className={'w-1/5 flex flex-col justify-content items-center transform hover:text-pink-400 hover:scale-125 transition duration-500  '}>
                <div>
                  <img src={item.url} alt="" width={'280px'} height={'280px'} />
                </div>
                <div className={'mt-12'}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-1200px m-auto mt-200px px-4 text-white relative ">
          <div className="find-text-title font-mono mb-4">Features</div>
          <div className="find-text-info ">DAOs To Earn</div>
          <div className="flex mt-24 mx-8 justify-between items-stretch flex-wrap relative">
            {featuresList.slice(0, 3).map((item, index) => (
              <div key={index} style={{ background: 'linear-gradient(180deg, #3A4FE7, #C931B5)' }} className="featuresList-item ">
                <div className={'flex items-center '}>
                  <img src={item.url} alt="" width={'29px'} height={'29px'} />
                  <span className={'text-xl ml-2'}>{item.title}</span>
                </div>
                <div className={'text-left pt-14'}>{item.text}</div>
              </div>
            ))}
          </div>
          <img src={dividing} width="1444px" height="16px" alt="" className="absolute left-1 top-39 " />

          <div className="flex mt-24 mx-8 justify-between items-stretch flex-wrap">
            {featuresList.slice(3).map((item, index) => (
              <div key={index} style={{ background: 'linear-gradient(180deg, #3A4FE7, #C931B5)' }} className="featuresList-item ">
                <div className={'flex items-center '}>
                  <img src={item.url} alt="" width={'29px'} height={'29px'} />
                  <span className={'text-xl ml-2'}>{item.title}</span>
                </div>
                <div className={'text-left pt-14'}>{item.text}</div>
              </div>
            ))}
          </div>
          <img src={dividing} width="1444px" height="16px" alt="" className="absolute left-1 -bottom-3 " />
        </div>
        <div id="WorkFlow" className="max-w-1200px mx-auto mt-200px px-4 text-white ">
          <div className="find-text-title  font-mono mb-4">Work Flow</div>
          <div className="find-text-info ">You can be a boss, you just work for yourself. </div>
          <div className="h-500px flex flex-row justify-center items-center  my-24 ">
            <div className="flex h-500px flex-col justify-around ">
              {workFlowList.map((item, index) => (
                <div key={index} className={'ml-2 flex w-150px h-91px justify-center items-center  ' + `${work === item.text ? 'avtive-work' : 'work-flow'}`} onClick={() => setWork(item.text)}>
                  <div className={'text-3xl '}>{item.text}</div>
                </div>
              ))}
            </div>

            <div className={'flex-grow w-500px h-500px -ml-4 ' + `${work === 'Architecture' ? 'architecture' : work === 'DAOn' ? 'daon' : work === 'Work' ? 'work' : 'daos'}`}></div>
          </div>
        </div>
        <div className={'max-w-1200px m-auto mt-200px flex flex-col justify-content items-start  text-white '}>
          <span className={'find-text-title font-mono mb-4'}>Virtual Reputation Governance</span>
          <div className={'mx-auto '}>
            <div className={'flex-grow m-auto -ml-4 w-1000px  h-1000px reputation '}></div>
          </div>
        </div>
        <div id="FAQs" className={'max-w-1200px m-auto mt-100px  flex flex-col justify-content items-start  text-white '}>
          <span className={'find-text-title font-mono mb-4'}>FAQs</span>
          <div className={'flex flex-wrap justify-between my-24 text-white w-full'}>
            <Collapse defaultActiveKey={['0']} ghost accordion expandIconPosition={'right'}>
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
