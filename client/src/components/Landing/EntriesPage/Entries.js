import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";

const Entries = () => 
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <Nav />
            <Books />
        </div>
      </div>
    </div>
  </div>

export default Entries;
