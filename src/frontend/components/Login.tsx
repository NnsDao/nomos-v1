import { StoicIdentity } from 'ic-stoic-identity';
import React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import dfinity from '../assets/login/dfinity.png';
import plug from '../assets/login/plug.png';
import stoic from '../assets/login/stoic.png';
import TokenInfo from '../utils/TokenInfo';
import './login.css';
const Index = () => {
  let history = useHistory();
  const routerLink = (hash: string) => {
    if (hash === 'Story') {
      history.push('/story');
    } else if (hash === 'Product') {
      history.push('/product');
    } else if (hash === 'Home') {
      history.push('/home');
    }
  };

  const onStoic = async () => {
    await StoicIdentity.load();
    try {
      let identity = await StoicIdentity.connect();
      if (identity) {
        window.localStorage.setItem('usePrincipal', identity.getPrincipal().toText());
        window.localStorage.setItem('isLogin', '1');
        window.localStorage.setItem('logonTime', new Date().getTime() + '');
        const { data: approve1 } = useQuery('data', () => TokenInfo.approve(identity.getPrincipal().toText()));
        console.log(approve1, 'approve1');

        TokenInfo.getAccountId(identity.getPrincipal().toText());
        // const { data: mintedCount } = useQuery('data', () => TokenInfo.getMinted());
        // const { data: mintedCount } = useQuery('data', () => TokenInfo.getMinted());

        history.push('/home');
      }
    } catch (error) {
      window.alert('log in was refused');
    }
  };
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
            <span onClick={() => routerLink('Story')} className=" cursor-pointer ">
              Story
            </span>
            <span onClick={() => routerLink('Product')} className=" cursor-pointer ">
              Product
            </span>
            <span onClick={() => routerLink('Home')} className=" cursor-pointer ">
              Home
            </span>
          </div>
          <div className="login-function-wrapper">
            <div className="login-item login-item-stoic" onClick={() => onStoic().then()}>
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
