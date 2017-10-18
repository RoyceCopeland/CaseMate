import React from "react";
import "./Stage.css";
import {Row, Col} from 'react-materialize'

const Stage = props => 
  <Row className="stage">
    <Col m={8} s={12} offset={"m2"}>
      {props.children}
    </Col>
  </Row>
;

export default Stage;
