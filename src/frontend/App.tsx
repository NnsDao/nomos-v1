import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Intro } from "./view/Intro"
// import { About } from './view/About';
import Index from './view/Index';
import Login from './components/Login';
import Main from './view/main/MainIndex';
import Product from './view/product/Index';
import Story from './view/story/Story';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/test">
            <Intro />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
