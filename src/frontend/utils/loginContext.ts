import React from 'react';

const state = {
  isLogin: Number(window.localStorage.getItem('isLogin')) || 0,
};
const changeLoginState = (login: number = 0) => {
  state.isLogin = login;
  window.localStorage.setItem('isLogin', String(login));
};
export const loginState = { ...state, changeLoginState };
export const LoginContext = React.createContext(loginState);
