import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoginContext } from './utils/loginContext';

class FrontendAuth extends Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
  }
  render() {
    const { routerConfig, location } = this.props;
    const { pathname } = location;
    let { isLogin, changeLoginState } = this.context;
    const logonTime = Number(window.localStorage.getItem('logonTime') ? window.localStorage.getItem('logonTime') : '');
    const expirationTime = 1000 * 60 * 60;
    const resetLocal = () => {
      if (Number(new Date().getTime()) - logonTime > expirationTime) {
        window.localStorage.setItem('usePrincipal', false);
        // window.localStorage.setItem('isLogin', 0);
        changeLoginState(0);
        window.localStorage.setItem('logonTime', 0);
      }
    };
    const targetRouterConfig = routerConfig.find(item => item.path === pathname);
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const { component } = targetRouterConfig;
      return <Route exact path={pathname} component={component} />;
    }
    if (isLogin) {
      resetLocal();
      isLogin = Boolean(Number(window.localStorage.getItem('isLogin')));
      if (!isLogin) {
        return <Redirect to="/home" />;
      }
      if (pathname === '/login') {
        return <Redirect to="/home" />;
      } else {
        if (targetRouterConfig) {
          return <Route path={pathname} component={targetRouterConfig.component} />;
        } else {
          return <Redirect to="/home" />;
        }
      }
    } else {
      if (targetRouterConfig && targetRouterConfig.auth) {
        return <Redirect to="/login" />;
      } else {
        return <Redirect to="/home" />;
      }
    }
  }
}
export default FrontendAuth;
