import { CircularProgress } from '@mui/material';
import React from 'react';
// earth
import earth1 from '../../assets/home/patrickearth_1.png';
import earth2 from '../../assets/home/patrickearth_2.png';
import earth3 from '../../assets/home/patrickearth_3.png';
import earth6 from '../../assets/home/patrickearth_6.png';
import earth9 from '../../assets/home/patrickearth_9.png';
import imgAirdrop from '../../assets/product/airdrop.png';
import alltasks from '../../assets/product/alltasks.png';
import contributeModel from '../../assets/product/contribute_model.png';
import imgContribution from '../../assets/product/contribution.png';
import design from '../../assets/product/design.png';
import dev from '../../assets/product/dev.png';
import imgEcosponsor from '../../assets/product/ecology_sponsor.png';
import img from '../../assets/product/edit.png';
import imgGenesisponsor from '../../assets/product/genesis_sponsor.png';
import imgShare from '../../assets/product/share.png';
import './index.css';

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
];

const Index = () => {
  return (
    <>
      <div className="product-wrapper">
        <div className="product-bg">
          <div className="product">
            <span className="product-title">Contribute Intro</span>

            <div className="product-info">
              <div className="flex flex-col justify-start items-start mb-2">
                <span className="product-subheading">
                  What are the advantages of participating in the contribution?
                </span>
                <p>
                  For the members who participate in the contribution, NnsDAO opens the community autonomy mode, after
                  all the credits are obtained by all the participants, the ICP obtained will be used for the
                  development of the whole NnsDAO ecology, 25% of which is used to put into DAOs Funds, which is mainly
                  used to layout the ICP ecology and invest in incubating the projects within the NnsDAO ecology, and
                  the final how to invest will be researched and decided by the community.The final investment will be
                  decided by the community through research and voting.
                </p>
              </div>
              <div className="flex flex-col justify-start items-start mb-2 ">
                <span className="text-subTitleColor font-bold text-2xl my-2">How does it work?</span>
                <p>
                  IC ecology's first DAO to issue token based on Canister smart contract, NDP determines the final issue
                  price through user contribution, and for the contributing users, we give the following rules:
                </p>
                <p>1.Each contribution from a single address cannot be less than 3 ICP.</p>
                <p>2.A single contribution of more than 50 ICP can get part of the reputation value.</p>
                <p>
                  3.If you contribute more than 100 ICP to a single address, you will get priority access to the Genesis
                  NFTs in the Universe.
                </p>
              </div>

              <div className="flex flex-col justify-start items-start mb-2">
                <span className="text-subTitleColor font-bold text-2xl my-2">
                  What is the total amount of contribution this time?
                </span>
                <p>
                  The total number of NDPs issued is 100 million, and the maximum contribution activity is 16% of the
                  total.
                </p>
              </div>

              <div className="flex flex-col justify-start items-start mb-2" data-aos="fade-up">
                <span className="text-subTitleColor font-bold text-2xl my-2">What is the contract address of NDP?</span>
                <p>Canister address, which can be viewed through icpscan.</p>
              </div>

              <div className="flex flex-col justify-start items-start mb-2" data-aos="fade-up">
                <span className="text-subTitleColor font-bold text-2xl my-2">How is the issue price defined?</span>
                <p>
                  For the price, you can refer to the formula below, where we give the detailed calculation formula.
                </p>
              </div>

              <div className="flex flex-col justify-start items-start mb-2">
                <span className="text-subTitleColor font-bold text-2xl my-2">
                  How do I get the Token after I contribute?
                </span>
                <p>
                  If you participate in the contribution, then you can access Nomos wallet to claim the assets, after
                  getting authorization you can see your balance on the wallet page, or you can use Stoicwallet to add
                  Canister, then view the assets, transfer money, etc.
                </p>
              </div>

              {/* table */}
              <div className="flex flex-col justify-start items-start mb-2">
                <span className="text-subTitleColor font-bold text-2xl my-2 mb-2">Table Details</span>
                <p data-aos="fade-up">
                  NnsDAO Labs defines this contribution model as a three-stage (multi-stage) inverse step curve, the
                  more total ICP contributed, the more NDPs will be received and the cheaper NDPs will be bought.
                </p>
                <div className="shadow  rounded border-b border-gray-600 mt-3 mb-8" data-aos="zoom-in">
                  <table className="min-w-full bg-gray-700 table-fixed border-collapse">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-white border-opacity-25">
                          Number of ICP contributions n
                        </th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-white border-opacity-25">
                          Real-time heat gradient t
                        </th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-white border-opacity-25">
                          Total NDP Token distribution s
                        </th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-white border-opacity-25">
                          NDP price p
                        </th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-white border-opacity-25">
                          Price range (ICP)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      <tr>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">[0, 3000]</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">0</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">s = 1000 n</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">p = 0.001</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">0.001</td>
                      </tr>

                      <tr>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">[3000, 8000]</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">1</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">s = n / p</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          See the figure below and substitute it into the formula
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">0.0009632 - 0.001</td>
                      </tr>

                      <tr>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">[8000, 12000]</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">2</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">s = n / p</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          See the figure below and substitute it into the formula
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          0.0009570 - 0.0009501
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">[12000, 15000]</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">3</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">s = n / p</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          See the figure below and substitute it into the formula
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          0.0009439 - 0.0009412
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">[15000,N]</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">4</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">s = 16,000,000</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">p = 0.0009375</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">0.0009375</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start mb-5">
                <span className="text-subTitleColor font-bold text-2xl my-2 mb-5">Calculation formula</span>
                <img src={contributeModel} className=" opacity-70" alt="" width={'100%'} height={'100%'} />
              </div>
              {/* Achievements */}

              <div className="flex flex-col justify-start items-start mb-2">
                <span className="text-subTitleColor font-bold text-2xl my-2 mb-2">Achievements Details</span>
                <div className="shadow  rounded border-b border-gray-600 mt-3 mb-8">
                  <table className="min-w-full bg-gray-700 table-fixed border-collapse">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-white border-opacity-25">
                          Title
                        </th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-white border-opacity-25">
                          Badge
                        </th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-white border-opacity-25">
                          Earnable?
                        </th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-white border-opacity-25">
                          Earned by
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      <tr>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">Genesis Sponsor</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          <img src={imgGenesisponsor} alt="" width={'36px'} height={'36px'} />
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          By sponsoring the initial phase of Icpscan.
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">Ecology Sponsor</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          <img src={imgEcosponsor} alt="" width={'36px'} height={'36px'} />
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          By sponsoring the development phase of NnsDAO.
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">Contribution</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          <img src={imgContribution} alt="" width={'36px'} height={'36px'} />
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          Obtained by contributing to the distribution.
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">Airdrop</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          <img src={imgAirdrop} alt="" width={'36px'} height={'36px'} />
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">❌</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          By participating in the airdrop event.
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">Share</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">
                          <img src={imgShare} alt="" width={'36px'} height={'36px'} />
                        </td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">❌</td>
                        <td className="border border-white border-opacity-25 text-left py-3 px-4">Earn by sharing.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* process */}
            <span className="process-title">Product Process</span>
            <div>
              {ProcessList.map((item, index) => (
                <div className="product-item" key={index} data-aos="zoom-in">
                  <div>
                    <img src={item.imgs} className="opacity-50" alt="product-nnsdao" width={'224px'} height={'224px'} />
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
                      <CircularProgress variant="determinate" value={70} size="small" />
                      <span style={{ marginLeft: '1rem', color: '#3A4FE7' }}>{item.productProcess}</span>
                    </div>
                    <div className=" product-progress my-16">
                      <CircularProgress variant="determinate" value={92} size="small" />
                      <span style={{ marginLeft: '1rem', color: '#50E3C2' }}>{item.designProcess}</span>
                    </div>
                    <div className=" product-progress ">
                      <CircularProgress variant="determinate" value={30} size="small" />
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
