import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppWrapper from './AppWrapper.js'
import { Button, Icon, Modal } from 'react-materialize'
//import Sprint from './components/SprintPlanning'

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={AppWrapper} />
      </Switch>
    </div>
  </Router>;


export default App;


