import React from "react";
import Skills from "./Skills";

const Year = props => (
  <ul>
    {props.skills.map(skill=>
        <Skills skill={skill}/>
    )}
  </ul>
);

export default Year;
