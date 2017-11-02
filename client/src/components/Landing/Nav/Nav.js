import React from "react";
//import App from "./EntriesPage/App";
import Auth from "../../../utils/Auth";
import "./Nav.css";

const Nav = props => (
  <div className="navbar-fixed">
    <nav className="#424242 grey darken-3 z-depth-0">
      <div className="nav-wrapper">
        <div className="row">
          <div className="col s12">
            <a href="#" className="brand-logo" />
            <ul className="right hide-on-med-and-down">
              <li onClick={props.click}>
                <a href="#">New Journal Entry</a>
              </li>
              <li onClick={props.showChatHandler}>
                <a>Chat</a>
              </li>
              <li onClick={props.deAuth}>
                <a href="#">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
        }
      </div>
    </nav>
  </div>
);

export default Nav;
