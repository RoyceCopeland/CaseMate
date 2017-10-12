import React, { Component } from "react";
import "./Subtask.css";
import {Card, Col} from 'react-materialize'

const Skill = props => (
  <Card className='blue-grey lighten-2 white-text' textClassName='white-text'>
    <p>This week's focus is</p>
    <span className="card-title grey-text text-darken-4">Practice advanced techniques</span>
  </Card>
);


export default Skill;
