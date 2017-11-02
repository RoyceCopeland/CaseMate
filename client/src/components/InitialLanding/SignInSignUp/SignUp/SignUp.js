import React from "react";
import "./SignUp.css";
import {Row, Card, Input, Button} from 'react-materialize'

const SignUp = props => 

  <Card
    className='grey lighten-3'
    title='Sign up for CaseMate'
    actions={
      <Row>
        <Button className="submit">Sign up</Button>
      </Row>
    }>
    <Row>
      <Input type="text" label="First name" s={6} />
      <Input type="text" label="Last name" s={6} />
      <Input type="text" label="Username" s={12} />
      <Input type="password" label="Password" s={12} />
      <Input type="password" label="Password (Repeat)" s={12} />
    </Row>
  </Card>
;

export default SignUp;
