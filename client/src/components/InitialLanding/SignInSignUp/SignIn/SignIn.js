import React from "react";
import "./SignIn.css";
import { Row, Card, Input, Button } from "react-materialize";

class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
    itWorks: false
  };

  handleChange = event => {
    const field = event.target.name;
    const newState = this.state;
    newState[field] = event.target.value;
    this.setState({
      newState
    });
  };

  submitForm = () => {
    this.setState({
      itWorks: true
    });
  };

  render = () => (
    <Card
      className="grey lighten-3"
      title="Sign in to CaseMate"
      actions={
        <Row>
          <Button onClick={this.props.submitForm} className="submit">
            {" "}
            Sign in{" "}
          </Button>
        </Row>
      }
    >
      <Row>
        <Input
          type="text"
          label="Username"
          onChange={this.handleChange}
          value={this.state.username}
          name="username"
          s={12}
        />{" "}
        <Input
          type="password"
          label="Password"
          onChange={this.handleChange}
          value={this.state.password}
          name="password"
          s={12}
        />{" "}
      </Row>{" "}
    </Card>
  );
}

export default SignIn;
