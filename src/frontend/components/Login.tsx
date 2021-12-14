import React from 'react';
import './login.css';
import stoic from '../assets/login/stoic.png';
import dfinity from '../assets/login/dfinity.png';
import plug from '../assets/login/plug.png';
import { useHistory } from 'react-router-dom';
const Index = () => {
  window.isLogin = false
  let history = useHistory();
  const routerLink = (hash: string) => {
    if (hash === 'Story') {
      history.push('/story')
    } else if (hash === 'Product') {
      history.push('/product')
    } else if (hash === 'Home') {
      history.push('/home')
    }
  }
  return (
    <>
      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-info">
            <div className="login-title">DAOs To Earn</div>
            <span>you can be a</span>
            <br />
            <span>boss.</span>
            <br />
            <span>you just work for </span>
            <br />
            <span>yourself</span>
            <br />
          </div>
        </div>
        <div className="login-right">
          <div className="login-link-wrapper">

            <span onClick={() => routerLink('Story')} className=' cursor-pointer '>Story</span>
            <span onClick={() => routerLink('Product')} className=' cursor-pointer '>Product</span>
            <span onClick={() => routerLink('Home')} className=' cursor-pointer '>Home</span>
          </div>
          <div className="login-function-wrapper">
            <div className="login-item login-item-stoic">
              <img src={stoic} alt="" />
              <span>Stoic Identity</span>
            </div>
            <div className="login-item login-item-internet">
              <img src={dfinity} alt="" />
              <span>Internet Identity</span>
            </div>
            <div className="login-outside">
              <div className="login-item-plug">
                <img src={plug} alt="" />
                <span>Plug Identity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
