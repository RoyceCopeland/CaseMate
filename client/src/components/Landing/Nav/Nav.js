import React from "react";
//import App from "./EntriesPage/App";

const Nav = props => 
<div class="navbar-fixed">
<nav class="transparent z-depth-0">
  <div class="nav-wrapper">
    <div class="row">
      <div class="col s12">
        <a href="#" data-activates="mobile-demo" class="button-collapse show-on-large"><i class="material-icons">menu</i></a>
        <a href="#" class="brand-logo" target="_blank">CaseMate Client Portal</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="./EntriesPage/App" target="_blank">New Journal Entry</a></li>
          <li><a href="#" target="_blank">FAQ</a></li>
          <li><a href="#" target="_blank">Log Out</a></li>
        </ul>
      </div>
    </div>
  
  
    <ul class="side-nav" id="mobile-demo">
      <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Sass</a></li>
      <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Components</a></li>
      <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Javascript</a></li>
      <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Mobile</a></li>
    </ul>
 
 
  </div>
</nav>
</div>
;

export default Nav;
