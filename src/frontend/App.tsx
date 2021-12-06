import React from "react"
// import { Intro } from "./view/Intro"
import { About } from "./view/About"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from "./view/Index";

function App() {
  return (
    <Router>
      <div className="App">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
