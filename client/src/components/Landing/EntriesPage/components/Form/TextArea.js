import React from "react";

export const TextArea = props =>
  <div className="form-group">
    <textarea className="form-control" rows="50" {...props} style={{height:8 + 'rem'}}/>
  </div>;
