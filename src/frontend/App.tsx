import 'antd/dist/antd.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import FrontendAuth from './FrontendAuth';
import routerMap from './routerMap';
AOS.init();
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
