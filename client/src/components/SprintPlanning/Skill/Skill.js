import React, { Component } from "react";
import "./Skill.css";
import {Card, Col} from 'react-materialize'

const Skill = props => (
  <Card className='blue-grey lighten-2 white-text' textClassName='white-text'>
    <p>The skill you're working on is</p>
    <span className="card-title grey-text text-darken-4">Archery</span>
  </Card>
);


export default Skill;
