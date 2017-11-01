import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", margin: "10px", background: "rgb(69, 179, 199" }} className="btn btn-success">
    {props.children}
  </button>;
