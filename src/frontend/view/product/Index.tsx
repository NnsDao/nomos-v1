import { Avatar, Progress } from 'antd';
import React from 'react';
import './index.css';
import img from '../../assets/product/edit.png';
import alltasks from '../../assets/product/alltasks.png';
import design from '../../assets/product/design.png';
import dev from '../../assets/product/dev.png';

const Index = () => {
  return (
    <>
      <div className="product-wrapper">
        <div className="product">
          <span className="product-title">Sponsors Intro</span>

          <div className="product-info">
            <div className="flex flex-col justify-start items-start mb-100px">
              <span className="product-subheading">What is it?</span>
              <p>Opportunity maps are resources which allow you and your teammates to highlight key areas of a user journey, and break apart different areas of opportunity within them!</p>
              <p>
                Opportunity mapping is most useful when done in early discovery — when you and your team and trying to figure out what features, brand moments, or other items you’re trying to
                emphasize or transform within any user journey.
              </p>
            </div>
            <div className="flex flex-col justify-start items-start">
              <span className="product-subheading">How does it work?</span>
              <p>OThink about key areas of a user journey, E.G. a login screen, a system modal, a growl notification, etc — then write down those pieces along the top row.</p>
              <p>
                Now, think about your problemspace. What types of opportunities dows your team want to focus on? These could be brand moments, communication opportunities with a user type, really
                anything that pertains to your work! This is a flexible resource on purpose. Lastly, work with your team to fill in the rows!
              </p>
            </div>
          </div>
          <span className="product-title">Product Process</span>
          <div>
            <div className="product-item">
              <div>
                <Avatar size={186} />
              </div>
              <div style={{ fontSize: '42px', color: '#FFFFFF' }}>Icpsan</div>
              <div className="my-12">
                {' '}
                <img src={img} alt="" width={'156px'} height={'282px'} />
              </div>
              <div className="flex flex-col justify-around items-start">
                <div className="flex justify-center items-center">
                  <div>
                    <img src={alltasks} alt="" width={'36px'} height={'36px'} />
                  </div>
                  <div>alltasks</div>
                </div>
                <div className="flex justify-center items-center my-12">
                  <div>
                    <img src={design} alt="" width={'36px'} height={'36px'} />
                  </div>
                  <div>design</div>
                </div>
                <div className="flex justify-center items-center ">
                  <div>
                    <img src={dev} alt="" width={'36px'} height={'36px'} />
                  </div>
                  <div>dev</div>
                </div>
              </div>

              <div>
                <div className="product-progress">
                  <Progress percent={70} size="small" status="active" strokeColor="#3A4FE7" trailColor="#251F5E" showInfo={false} />
                  <span style={{ marginLeft: '1rem', color: '#3A4FE7' }}>70%</span>
                </div>
                <div className=" product-progress my-16">
                  <Progress percent={92} size="small" status="active" strokeColor="#50E3C2" trailColor="#DFFFFF" showInfo={false} />
                  <span style={{ marginLeft: '1rem', color: '#50E3C2' }}>92%</span>
                </div>
                <div className=" product-progress ">
                  <Progress percent={30} size="small" status="active" strokeColor="#D130B3" trailColor="#2f1049" showInfo={false} />
                  <span style={{ marginLeft: '1rem', color: '#D130B3' }}>30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
