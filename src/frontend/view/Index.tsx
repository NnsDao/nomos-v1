import React, { useState } from "react"
import { Input, Collapse } from 'antd';
import "./index.css"
// dao img
import earth9 from '../assets/home/patrickearth_9.png'
import earth3 from '../assets/home/patrickearth_3.png'
import earth2 from '../assets/home/patrickearth_2.png'
import earth1 from '../assets/home/patrickearth_1.png'
// logo
import Collaboration from '../assets/home/Collaboration.png'
import DAOs from '../assets/home/DAO.png'
import Roadmap from '../assets/home/Roadmap.png'
import Statistic from '../assets/home/Statistic.png'
import Moon from '../assets/home/Moon.png'
import Holder from '../assets/home/Holder.png'

// store
import marketplace from '../assets/home/marketplace.png'
import window from '../assets/home/window.png'
import google from '../assets/home/google.png'
import app from '../assets/home/app.png'

const index = () => {

    const activeClass = 'text-white transition delay-150 duration-500'
    const inactiveClass = 'text-white opacity-50 transform hover:scale-90'
    let [link, setLink] = useState('Story');
    const linkList = ['Story', 'WorkFlow', 'FAQs', 'NnsDAO']
    const daoList = [
        {
            url: earth1,
            text: 'Patrick'
        },
        {
            url: earth9,
            text: 'Japan DaoAssociation'
        },
        {
            url: earth3,
            text: 'BitcoinDao'
        },
        {
            url: earth2,
            text: 'BitcoinDao'
        },
    ]
    const featuresList = [
        {
            url: Collaboration,
            title: 'Collaboration',
            text: 'By earning NDPs and other Tokens through collaboration, work is not a dull game.'
        },
        {
            url: DAOs,
            title: 'DAOs',
            text: 'Each DAOs has its own niche and membership, and they can speak freely and create products.'
        },
        {
            url: Roadmap,
            title: 'Roadmap',
            text: 'Different milestones at different stages will reach different goals, and when the moon landing plan of the smart contract is met, it will be independent when a new plan is driven.'
        },
        {
            url: Statistic,
            title: 'Statistic',
            text: 'Through Github, members evaluate each other, the workload and work results of each person are counted, and ultimately voted on by DAOn.'
        },
        {
            url: Moon,
            title: 'Moon',
            text: 'Whenever a project meets the moon landing plan and new milestone stages, a new flow pool is formed to give back to users who hold NDPs and virtual reputations.'
        },
        {
            url: Holder,
            title: 'Holder',
            text: 'For Holder, they enjoy the lasting benefits of the project, which will be incentivized through GameFi, NFTs, Marketplace, Token issuance, etc.'
        },
    ]
    let [work, setWork] = useState('Architecture');

    const workFlowList = [
        {
            text: 'Architecture',
        },
        {
            text: 'DAOn',
        },
        {
            text: 'Work',
        }
    ]
    //Collapse
    const { Panel } = Collapse;
    const faqList = [
        {
            frequently: '1',
            questions: '1'
        },
        {
            frequently: '2',
            questions: '2'
        },
        {
            frequently: '3',
            questions: '3'
        },
    ]
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
    return (
        <>
            <div className={"w-full  mx-auto min-h-screen flex flex-col flex-wrap items-center bg-primary pb-32"}>
                {/* <div className={"w-full  mx-auto min-h-screen flex flex-col flex-wrap items-center bg-primary pb-32"}> */}


                {/* <div className={"w-full min-w-full max-w-screen  min-h-screen flex flex-col flex-wrap items-center bg-primary pb-32"}> */}
                <div className={'w-4/5 min-w-1400px flex justify-between items-center mt-7 '}>
                    <div className={'flex jsutify-between items-center'}>
                        <div className=" flex  space-x-10">
                            {linkList.map((item, index) => (
                                <a key={index} href={`#${item}`}
                                    onClick={() => {
                                        setLink(link = item);
                                    }}
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${link === item
                                        ? activeClass
                                        : inactiveClass
                                        } ${index > 4 ? 'ml-4' : ''}`}
                                >
                                    <span className={''}>{item}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={'w-32 h-12 rounded-3xl bg-sign text-white flex justify-center items-center'}>
                        {'Sign up'}
                    </div>
                </div>
                <div className={'w-screen h-1000px home-bg -mt-32 flex justify-center'}>
                    <div className={"min-w-1200px h-screen flex flex-wrap  items-center  "}>
                        <div className={'flex min-w-1200px flex-col justify-content items-start text-white '}>
                            <span className={'text-4xl font-mono mb-4'}> Find Your </span>
                            <span className={'text-4xl font-mono mb-4'}> Favourite </span>
                            <span className={'text-4xl font-mono mb-4'}> DAOn or DAOs </span>
                            <span className={'text-base mb-20'}> The next generation of blockchain consensus is DAO </span>
                            <div className={'relative'} >
                                <Input style={{ minWidth: '500px', width: '25vw', height: '45px', background: 'rgba(225, 225, 225, 0.13)', borderColor: '#3F62E4', color: 'white' }} placeholder='input your want dao' />
                                <span className={'absolute bottom-1 right-1 px-4 py-2 rounded  buttonGradient'}>Let's Go</span>
                            </div>
                        </div>
                        {/* <div className={'flex flex-clo justify-content items-center boeder'}>
                        <img src="src/frontend/assets/home/bg.png" />
                    </div> */}
                    </div>
                </div>
                <div className={'min-w-1200px flex flex-col justify-content items-start  text-white '}>
                    <span className={'text-4xl font-mono mb-4'}>Every DAOs is unique</span>
                    <span className={'text-base '}>Join different DAOn's to brainstorm and collide with your own DAOs</span>
                    <div className={'flex min-w-1200px flex justify-between my-24'}>
                        {
                            daoList.map((item) => (
                                <div className={'w-1/5 flex flex-col justify-content items-center transform hover:text-pink-400 hover:scale-125 transition duration-500  '}>
                                    <div >
                                        <img src={item.url} alt="" />
                                    </div>
                                    <div className={'mt-12'}>
                                        {item.text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={'min-w-1200px flex flex-col justify-content items-start  text-white '}>
                    <span className={'text-4xl font-mono mb-4'}>Features</span>
                    <span className={'text-base '}>DAOs To Earn</span>
                    <div className={' w-1200px flex flex-wrap justify-between my-24'}>
                        {
                            featuresList.map((item, index) => (
                                <div key={index} style={{ background: ' linear-gradient(180deg, #3A4FE7 0%, #C931B5 100%)' }} className={'w-30 flex flex-wrap flex-col justify-content items-start pl-14 pr-24 pt-16 pb-32 mx-2 my-6'}>
                                    <div className={'flex justify-between items-center '}>
                                        <img src={item.url} alt="" />
                                        <span className={'text-xl ml-2'}>{item.title}</span>
                                    </div>
                                    <div className={'mt-16 text-left'}>
                                        {item.text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div id="WorkFlow" className={'min-w-1200px flex flex-col justify-center items-start  text-white '}>
                    <span className={'text-4xl font-mono mb-4'}>Work Flow</span>
                    <span className={'text-base '}>You can be a boss, you just work for yourself. </span>
                    <div className={' w-1200px h-500px flex flex-row justify-center items-center  my-24 '}>
                        <div className={'flex h-500px flex-col justify-around '}>
                            {
                                workFlowList.map((item, index) => (
                                    <div key={index} className={'ml-2 flex w-48 h-1/4 justify-center items-center  ' + `${work === item.text ? 'avtive-work' : 'work-flow'}`}
                                        onClick={() => (
                                            setWork(work = item.text)

                                        )}>
                                        <div className={'text-3xl '}>{item.text}</div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className={'flex-grow h-500px -ml-4 ' + `${work === 'Architecture' ? 'architecture' : work === 'DAOn' ? 'DAOn' : 'work'}`}>
                        </div>


                    </div>

                </div>
                <div className={'min-w-1200px flex flex-col justify-content items-start  text-white '}>
                    <span className={'text-4xl font-mono mb-4'}>Virtual Reputation Governance</span>
                    <div className={' w-1200px flex flex-wrap justify-between my-24'}>
                        <div className={'flex-grow h-500px -ml-4 ' + `${work === 'Architecture' ? 'architecture' : work === 'DAOn' ? 'DAOn' : 'work'}`}>
                        </div>
                    </div>

                </div>
                <div id='FAQs' className={'min-w-1200px flex flex-col justify-content items-start  text-white '}>

                    <span className={'text-4xl font-mono mb-4'}>FAQs</span>
                    <div className={' w-1200px flex flex-wrap justify-between my-24 text-white '}>
                        <Collapse defaultActiveKey={['1']} ghost accordion expandIconPosition={"right"}>

                            {
                                faqList.map((item, index) => (
                                    <Panel header={item.frequently} key={index.toString()} forceRender={true} >
                                        <p>{item.questions}</p>
                                    </Panel>
                                ))
                            }
                        </Collapse>
                    </div>

                </div>
                <div className={'min-w-1000px w-1000px flex justify-between items-start  text-white '}>
                    <img src={marketplace} alt="" />
                    <img src={window} alt="" />
                    <img src={google} alt="" />
                    <img src={app} alt="" />

                </div>

            </div>
        </>
    )
}
export default index