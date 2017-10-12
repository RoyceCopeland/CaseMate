import React from "react";
import "./Nav.css";
import {Navbar, NavItem, Icon} from 'react-materialize'

const Nav = props => 
  <Navbar brand={`${props.streak} day streak`} left>
    <NavItem data-activates="sidenav_0"><Icon>dehaze</Icon></NavItem>
  </Navbar>
;

export default Nav;
