import React from "react";
//import App from "./EntriesPage/App";
import Auth from "../../../utils/Auth";


const Nav = props => 
<div className="navbar-fixed">
<nav className="cyan darken-1 z-depth-0">
  <div className="nav-wrapper">
    <div className="row">
      <div className="col s12">
        <a href="#" className="brand-logo" target="_blank">CaseMate Client Portal</a>
        <ul className="right hide-on-med-and-down">
          <li onClick={props.click}><a href="#">New Journal Entry</a></li>
          <li onClick={props.chat}><a href="#">Chat</a></li>
          <li><a href="#" target="_blank">FAQ</a></li>
          <li onClick={props.deAuth}><a href="#">Log Out</a></li>        </ul>
      </div>
   
    </div>
 
 
  </div>

</nav>
</div>


  ;


export default Nav;
