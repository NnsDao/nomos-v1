import React, { useEffect, useState } from 'react';
import { counter } from 'canisters/counter';
import { Auth } from './Auth';
import logo from '../assets/logo-dark.svg';
import tailwindlogo from '../assets/tailwindcss.svg';
import { Link } from 'react-router-dom';
import { StoicIdentity } from 'ic-stoic-identity';

export function Intro() {
  const [count, setCount] = useState<string>();

  const refreshCounter = async () => {
    const res = await counter.getValue();
    setCount(res.toString());
  };

  useEffect(() => {
    refreshCounter();
  }, []);

  const onIncrementClick = async () => {
    await counter.increment();
    refreshCounter();
  };

  const onStoic = async () => {
    await StoicIdentity.load();
    try {
      let identity = await StoicIdentity.connect();
      if (identity) {
        console.log('sign', identity.getPrincipal().toText());
      }
    } catch (error) {
      window.alert('log in was refused');
    }
  };

  return (
    <>
      <Auth />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-center text-2xl mt-5">Ready. Lets build the new WEB 3.0 dApp , Vite + React + React Router + Motoko + Tailwind2</p>
        <button className="demo-button" onClick={onIncrementClick}>
          Count is: {count}
        </button>
        <div className="p-6 max-w-sm mx-auto bg-purple-500 rounded-xl shadow-md flex items-center space-x-4 mt-5">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src={tailwindlogo} alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-white ">tailwindcss</div>
            <p className="text-white">You have a ready!</p>
          </div>
        </div>
        <button className="mt-5 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          <Link to="/about" target="_blank">
            Click Go About
          </Link>
        </button>
        <button
          className="mt-5 px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={() => onStoic().then()}
        >
          Test Stoic Identity
        </button>
      </header>
    </>
  );
}
