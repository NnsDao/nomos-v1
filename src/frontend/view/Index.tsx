import { Collapse, Input } from 'antd';
import React, { useState } from 'react';
import app from '../assets/home/app.png';
// logo
import Collaboration from '../assets/home/Collaboration.png';
import DAOs from '../assets/home/DAO.png';
// dao img
import google from '../assets/home/google.png';
import Holder from '../assets/home/Holder.png';
import marketplace from '../assets/home/marketplace.png';
import Moon from '../assets/home/Moon.png';
import earth1 from '../assets/home/patrickearth_1.png';
import earth2 from '../assets/home/patrickearth_2.png';
import earth3 from '../assets/home/patrickearth_3.png';
import earth9 from '../assets/home/patrickearth_9.png';
import Roadmap from '../assets/home/Roadmap.png';
import Statistic from '../assets/home/Statistic.png';
import window from '../assets/home/window.png';
import './index.css';
export default function index() {
  const activeClass = 'text-white transition delay-150 duration-500 cursor-pointer';
  const inactiveClass = 'text-white opacity-50 transform hover:scale-90 cursor-pointer';
  const [link, setLink] = useState('Story');
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
  return (
    <>
      <div className="w-full m-auto bg-primary pb-32">
        <div className="p-6 sticky top-0 bg-primary z-10">
          <div className="flex justify-between items-center max-w-1400px m-auto">
            <div className={'flex jsutify-between items-center'}>
              <div className=" flex  space-x-10">
                {linkList.map((item, index) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => {
                      setLink(item);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${link === item ? activeClass : inactiveClass} ${index > 4 ? 'ml-4' : ''}`}>
                    <span key={item} className={''}>
                      {item}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className={'w-32 h-12 rounded-3xl bg-sign text-white flex justify-center items-center'}>{'Sign up'}</div>
          </div>
        </div>
        <div className="w-screen h-screen home-bg ">
          <div className="max-w-1200px flex flex-wrap  m-auto items-center pt-240px">
            <div className={'flex min-w-1200px flex-col justify-content items-start text-white '}>
              <span className={'text-4xl font-mono mb-4'}> Find Your </span>
              <span className={'text-4xl font-mono mb-4'}> Favourite </span>
              <span className={'text-4xl font-mono mb-4'}> DAOn or DAOs </span>
              <span className={'text-base mb-20'}> The next generation of blockchain consensus is DAO </span>
              <div className={'relative'}>
                <Input
                  style={{
                    minWidth: '500px',
                    width: '25vw',
                    height: '45px',
                    background: 'rgba(225, 225, 225, 0.13)',
                    borderColor: '#3F62E4',
                    color: 'white',
                  }}
                  placeholder="input your want dao"
                />
                <span className={'absolute bottom-1 right-1 px-4 py-2 rounded  buttonGradient'}>Let's Go</span>
              </div>
            </div>
          </div>
        </div>
        <div className={'max-w-1200px mx-auto mt-200px flex flex-col justify-content items-start  text-white '}>
          <span className={'text-4xl font-mono mb-4'}>Every DAOs is unique</span>
          <span className={'text-base '}>Join different DAOn's to brainstorm and collide with your own DAOs</span>
          <div className={'flex min-w-1200px flex justify-between mt-24'}>
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
        <div className={'max-w-1200px m-auto mt-200px flex flex-col justify-content items-start  text-white '}>
          <span className={'text-4xl font-mono mb-4'}>Features</span>
          <span className={'text-base '}>DAOs To Earn</span>
          <div className={' w-full flex flex-wrap justify-between mt-24'}>
            {featuresList.map((item, index) => (
              <div
                key={index}
                style={{
                  background: ' linear-gradient(180deg, #3A4FE7 0%, #C931B5 100%)',
                }}
                className={'  featuresList-item'}>
                <div className={'flex items-center '}>
                  <img src={item.url} alt="" width={'29px'} height={'29px'} />
                  <span className={'text-xl ml-2'}>{item.title}</span>
                </div>
                <div className={'mt-16 text-left'}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div id="WorkFlow" className={'max-w-1200px mx-auto mt-200px flex flex-col justify-center items-start  text-white '}>
          <span className={'text-4xl font-mono mb-4'}>Work Flow</span>
          <span className={'text-base '}>You can be a boss, you just work for yourself. </span>
          <div className={' w-1200px h-500px flex flex-row justify-center items-center  my-24 '}>
            <div className={'flex h-500px flex-col justify-around '}>
              {workFlowList.map((item, index) => (
                <div key={index} className={'ml-2 flex w-48 h-1/4 justify-center items-center  ' + `${work === item.text ? 'avtive-work' : 'work-flow'}`} onClick={() => setWork(item.text)}>
                  <div className={'text-3xl '}>{item.text}</div>
                </div>
              ))}
            </div>

            <div className={'flex-grow h-500px -ml-4 ' + `${work === 'Architecture' ? 'architecture' : work === 'DAOn' ? 'DAOn' : 'work'}`}></div>
          </div>
        </div>
        <div className={'max-w-1200px m-auto mt-140px flex flex-col justify-content items-start  text-white '}>
          <span className={'text-4xl font-mono mb-4'}>Virtual Reputation Governance</span>
          <div className={' w-1200px flex flex-wrap justify-between my-24'}>
            <div className={'flex-grow h-500px -ml-4 ' + `${work === 'Architecture' ? 'architecture' : work === 'DAOn' ? 'DAOn' : 'work'}`}></div>
          </div>
        </div>
        <div id="FAQs" className={'max-w-1200px m-auto mt-200px  flex flex-col justify-content items-start  text-white '}>
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

        <div className="introduction-wrapper ">
          <div className="max-w-1200px m-auto flex flex-col justify-center items-center">
            <div className="text-7xl mt-60 mb-100px max-w-900px">Introduction à la notion de grille</div>
            <div className="min-w-1000px text-left mb-64 ">
              <p className="mb-6">
                Bien que les grilles proviennent des imprimés, elles trouvent leur application partout autour de nous, de l'architecture à l'ingénierie. Une grille bien conçue peut fournir une
                structure et une cohérence, aider à mettre de l'ordre dans le chaos et créer une disposition plus harmonieuse. Les interfaces n'étant plus rigides, nos systèmes de grille ne le sont
                plus également. Les grilles sont idéales pour concevoir des interfaces dynamiques au-delà d'un seul support ou d'une seule taille d'écran. De la plus petite à la plus grande, les
                grilles vous couvrent.
              </p>
              <p className="mb-6">
                Une grille se compose de trois éléments : des colonnes (ou lignes), des Espace intercolonnes (gutters) et des marges. Pour la mise en œuvre, il est préférable de définir chacun d'entre
                eux à l'aide de pourcentages, plutôt que de valeurs fixes. Cela permettra au contenu de s'adapter dynamiquement à n'importe quelle taille d'écran. Les colonnes de la grille comportent
                du contenu :
              </p>
              <p className="mb-6">Les Gutters ou Espace intercolonnes sont l'espace maintenu entre deux colonnes. Elles aident à séparer le contenu :</p>
              <p className="mb-6">Les marges sont l'espace entre le contenu et les bords de l'écran. Elles aident à encadrer et à créer de l'espace autour du contenu :</p>
            </div>
          </div>

          <div className={'w-840px mx-auto flex justify-between items-start  text-white '}>
            <img src={marketplace} width={'135px'} height={'45px'} alt="" />
            <img src={window} width={'135px'} height={'45px'} alt="" />
            <img src={google} width={'135px'} height={'45px'} alt="" />
            <img src={app} width={'135px'} height={'45px'} alt="" />
          </div>
          <div className={'w-840px mx-auto mt-200px mb-4 flex justify-between items-start  text-white '}>

            <span className={inactiveClass}>Nomos</span>
            <span className={inactiveClass}>Story</span>
            <span className={inactiveClass}>VRG</span>
            <span className={inactiveClass}>Partners</span>
          </div>

        </div>
        <div className='w-full h-px  bg-opacity-10 bg-white'></div>
        <div className="w-1200px mx-auto my-7 text-left text-white pb-5 text-sl opacity-50">@ 2021, NnsDAO Labs</div>

      </div>
    </>
  );
}
// export default index
