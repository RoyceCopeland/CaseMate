import React from "react";
//import App from "./EntriesPage/App";

const Nav = props => 
<div className="navbar-fixed">
<nav className="cyan darken-1 z-depth-0">
  <div className="nav-wrapper">
    <div className="row">
      <div className="col s12">
        <a href="#" className="brand-logo" target="_blank">CaseMate Client Portal</a>
        <ul className="right hide-on-med-and-down">
          <li onClick={props.click}><a href="#">New Journal Entry</a></li>
          <li><a href="#" target="_blank">Chat</a></li>
          <li><a href="#" target="_blank">FAQ</a></li>
          <li><a href="#" target="_blank">Log Out</a></li>
        </ul>
      </div>
   
    </div>
  
  
    {/* <ul className="side-nav" id="mobile-demo">
      <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Sass</a></li>
      <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Components</a></li>
      <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Javascript</a></li>
      <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Mobile</a></li>
    </ul> */}
 
 
  </div>
</nav>
</div>
;

export default Nav;
