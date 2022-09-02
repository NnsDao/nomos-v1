import React, { Component } from 'react';
class FrontendAuth extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { routerConfig, location } = this.props;
    const { pathname } = location;
    let isLogin = Boolean(Number(window.localStorage.getItem('isLogin')));
    const logonTime = Number(window.localStorage.getItem('logonTime') ? window.localStorage.getItem('logonTime') : '');
    const expirationTime = 1000 * 60 * 60;
    const resetLocal = () => {
      if (Number(new Date().getTime()) - logonTime > expirationTime) {
        window.localStorage.setItem('usePrincipal', false);
        window.localStorage.setItem('isLogin', 0);
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
        return <Route to="/home" />;
      }
      if (pathname === '/login') {
        return <Route to="/home" />;
      } else {
        if (targetRouterConfig) {
          return <Route path={pathname} component={targetRouterConfig.component} />;
        } else {
          return <Route to="/home" />;
        }
      }
    } else {
      if (targetRouterConfig && targetRouterConfig.auth) {
        return <Route to="/login" />;
      } else {
        return <Route to="/home" />;
      }
    }
  }
}
export default FrontendAuth;
