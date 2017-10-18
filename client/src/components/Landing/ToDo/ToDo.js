import React from "react";
import "./ToDo.css";
import {SideNav, SideNavItem, Button, Col, Card, Icon} from 'react-materialize'

const ToDo = props => 
  <Card className='blue-grey darken-1' textClassName='white-text' title='Todo'>
  	{props.children}
  </Card>
;

export default ToDo;
