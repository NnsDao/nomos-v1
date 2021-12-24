import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import FrontendAuth from './FrontendAuth';
import routerMap from './routerMap';
function App() {
  return (
    <Router>
      <div className="min-w-1200px">
        <Switch>
          <FrontendAuth routerConfig={routerMap} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
