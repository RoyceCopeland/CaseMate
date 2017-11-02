import React, { Component } from "react";
import "./InitialLanding.css";
import SignIn from "./SignInSignUp/SignIn/SignIn";
import SignUp from "./SignInSignUp/SignUp/SignUp";
import { Row, Col, Card, CardTitle, Tabs, Tab } from "react-materialize";

class InitialLanding extends Component {
  state = {
    username: "",
    password: "",
    background: ""
  };

  handleChange = event => {
    const field = event.target.name;
    const newState = this.state;
    newState[field] = event.target.value;
    this.setState({
      newState
    });
  };

  render() {
    return (
      <div className="bck">
      
        <Row className="wrapper">
          <Col l={6} m={6} s={12} offset={"m1 l1"}>
            <Tabs className="z-depth-1">
              <Tab title="Sign in" active>
                <SignIn submitForm={this.props.submitForm} />
              </Tab>
              <Tab title="Sign up">
                <SignUp />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default InitialLanding;
