import 'antd/dist/antd.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import FrontendAuth from "./FrontendAuth";
import routerMap from "./routerMap";
function App () {
    return (
      <Router>
        <div>
          <Switch>
            <FrontendAuth routerConfig={routerMap} />
          </Switch>
        </div>
      </Router>
    );
}
export default App;

