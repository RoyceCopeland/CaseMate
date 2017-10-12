import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppWrapper from './AppWrapper.js'
import Sprint from './components/SprintPlanning'

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={AppWrapper} />
        <Route exact path="/sprint" component={Sprint} />
      </Switch>
    </div>
  </Router>;


export default App;


