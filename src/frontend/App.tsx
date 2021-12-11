import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'antd/dist/antd.css';

// import { Intro } from "./view/Intro"
import { About } from "./view/About"
import Index from "./view/Index";
import Main from './view/main/MainIndex'
import Product from "./view/product/Index"
import Login from "./view/Login";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/product" >
            <Product />
          </Route>
          <Route path="/main" >
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
