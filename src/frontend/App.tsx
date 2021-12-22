import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import FrontendAuth from './FrontendAuth';
import routerMap from './routerMap';
import { LoginContext, loginState } from './utils/loginContext';

function App() {
  return (
    <LoginContext.Provider value={loginState}>
      <Router>
        <div>
          <Switch>
            <FrontendAuth routerConfig={routerMap} />
          </Switch>
        </div>
      </Router>
    </LoginContext.Provider>
  );
}
export default App;
