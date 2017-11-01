import React from "react";
import Landing from "./components/Landing/Landing";
//import Scrum from "./components/Scrum";
import InitialLanding from "./components/InitialLanding/InitialLanding";
import Auth from "./utils/Auth.js";
import FirstLogin from "./utils/FirstLogin.js";

class AppWrapper extends React.Component {
  state = {
    username: "",
    password: "",
    loggedIn: Auth.isUserAuthenticated(),
    firstLogin: FirstLogin.check()
  };

  handleChange = event => {
    const field = event.target.name;
    const newState = this.state;
    newState[field] = event.target.value;
    this.setState({
      newState
    });
  };

  // componentDidMount = () => {
  //   Auth.deauthenticateUser();
  // }
  deAuthenticate = () =>{
    Auth.deauthenticateUser();
    this.setState({
      loggedIn: Auth.isUserAuthenticated()
    });
  }

  submitForm = () => {
    Auth.authenticateUser("faketoken");
    this.setState({
      loggedIn: Auth.isUserAuthenticated()
    });
  };

  render = () =>
    this.state.loggedIn ? (
        <Landing deAuth={this.deAuthenticate}/>
    ) : (
      <InitialLanding submitForm={this.submitForm} />
    );
}

export default AppWrapper;
