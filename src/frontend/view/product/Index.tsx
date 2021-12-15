import { Avatar, Progress } from 'antd';
import React from 'react';
import './index.css';
import img from '../../assets/product/edit.png';
import alltasks from '../../assets/product/alltasks.png';
import design from '../../assets/product/design.png';
import dev from '../../assets/product/dev.png';
import contributeModel from '../../assets/product/contribute_model.png';

// earth
import earth1 from '../../assets/home/patrickearth_1.png';
import earth2 from '../../assets/home/patrickearth_2.png';
import earth3 from '../../assets/home/patrickearth_3.png';
import earth6 from '../../assets/home/patrickearth_6.png';
import earth9 from '../../assets/home/patrickearth_9.png';

const ProcessList = [
  {
    imgs: earth1,
    name: 'Icpscan',
    productProcess: 85,
    designProcess: 90,
    devProcess: 86,
  },
  {
    imgs: earth2,
    name: 'Texas',
    productProcess: 90,
    designProcess: 80,
    devProcess: 75,
  },
  {
    imgs: earth3,
    name: 'Universe',
    productProcess: 76,
    designProcess: 70,
    devProcess: 66,
  },
  {
    imgs: earth9,
    name: 'Icptree',
    productProcess: 55,
    designProcess: 68,
    devProcess: 45,
  },
  {
    imgs: earth6,
    name: 'Icpdrops',
    productProcess: 69,
    designProcess: 74,
    devProcess: 65,
  },
]

const Index = () => {
  return (
    <>
      <div className="product-wrapper">
        <div className='product-bg'>
          <div className="product">
            <span className="product-title">Contribute Intro</span>

            <div className="product-info">
              <div className="flex flex-col justify-start items-start mb-20px">
                <span className="product-subheading">What are the advantages of participating in the contribution?</span>
                <p>
                  For the members who participate in the contribution, NnsDAO opens the community autonomy mode, after all the credits are obtained by
                  all the participants, the ICP obtained will be used for the development of the whole NnsDAO ecology, 25% of which is used to put into DAOs Funds,
                  which is mainly used to layout the ICP ecology and invest in incubating the projects within the NnsDAO ecology, and the final
                  how to invest will be researched and decided by the community.The final investment will be decided by the community through research and voting.
                </p>
              </div>
              <div className="flex flex-col justify-start items-start mb-20px">
                <span className="product-subheading">How does it work?</span>
                <p>
                  IC ecology's first DAO to issue token based on Canister smart contract, NDP determines the final issue price
                  through user contribution, and for the contributing users, we give the following rules:
                </p>

                <p>1.Each contribution from a single address cannot be less than 3 ICP.</p>

                <p>2.A single contribution of more than 50 ICP can get part of the reputation value.</p>

                <p>3.If you contribute more than 100 ICP to a single address, you will get priority access to the Genesis NFTs in the Universe.</p>
              </div>

              <div className="flex flex-col justify-start items-start mb-20px">
                <span className="product-subheading">What is the total amount of contribution this time?</span>
                <p>
                  The total number of NDPs issued is 100 million, and the maximum contribution activity is 16% of the total.
                </p>
              </div>

              <div className="flex flex-col justify-start items-start mb-20px">
                <span className="product-subheading">What is the contract address of NDP?</span>
                <p>
                  Canister address, which can be viewed through icpscan.
                </p>
              </div>

              <div className="flex flex-col justify-start items-start mb-20px">
                <span className="product-subheading">How is the issue price defined?</span>
                <p>
                  For the price, you can refer to the formula below, where we give the detailed calculation formula.
                </p>
              </div>

              <div className="flex flex-col justify-start items-start mb-20px">
                <span className="product-subheading">How do I get the Token after I contribute?</span>
                <p>
                  If you participate in the contribution, then you can access Nomos wallet to claim the assets, after getting authorization you can see your balance on the wallet page,
                  or you can use Stoicwallet to add Canister, then view the assets, transfer money, etc.
                </p>
              </div>

              <div className="flex flex-col justify-start items-start mb-20px">
                <span className="product-subheading">Calculation formula</span>
                <p>
                  NnsDAO Labs defines this contribution model as a three-stage (multi-stage) inverse step curve
                </p>
                <p>The more total ICP contributed, the more NDPs will be received and the cheaper NDPs will be bought.</p>
                <img src={contributeModel} alt="" width={'100%'} height={'100%'} />

              </div>

            </div>
            <span className="product-title">Product Process</span>
            <div>
              {ProcessList.map((item, index) => (
                <div className="product-item">
                  <div className=" flex justify-center items-center rounded-full  overflow-hidden relative z-1">
                    <img src={item.imgs} className='opacity-50' alt="product-nnsdao" width={'224px'} height={'224px'} />
                  </div>
                  <div style={{ fontSize: '42px', color: '#FFFFFF' }}>{item.name}</div>
                  <div className="my-12">
                    {' '}
                    <img src={img} alt="" width={'156px'} height={'282px'} />
                  </div>
                  <div className="flex flex-col justify-around items-start">
                    <div className="flex justify-center items-center">
                      <div>
                        <img src={alltasks} alt="" width={'36px'} height={'36px'} />
                      </div>
                    </div>
                    <div className="flex justify-center items-center my-12">
                      <div>
                        <img src={design} alt="" width={'36px'} height={'36px'} />
                      </div>
                    </div>
                    <div className="flex justify-center items-center ">
                      <div>
                        <img src={dev} alt="" width={'36px'} height={'36px'} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-progress">
                      <Progress percent={70} size="small" status="active" strokeColor="#3A4FE7" trailColor="#251F5E" showInfo={false} />
                      <span style={{ marginLeft: '1rem', color: '#3A4FE7' }}>{item.productProcess}</span>
                    </div>
                    <div className=" product-progress my-16">
                      <Progress percent={92} size="small" status="active" strokeColor="#50E3C2" trailColor="#DFFFFF" showInfo={false} />
                      <span style={{ marginLeft: '1rem', color: '#50E3C2' }}>{item.designProcess}</span>
                    </div>
                    <div className=" product-progress ">
                      <Progress percent={30} size="small" status="active" strokeColor="#D130B3" trailColor="#2f1049" showInfo={false} />
                      <span style={{ marginLeft: '1rem', color: '#D130B3' }}>{item.devProcess}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
export default Index;
