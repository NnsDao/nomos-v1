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
import MainIndex from './view/main/MainIndex'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/main" >
            <MainIndex />
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
