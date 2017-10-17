import React, { Component } from "react";

import "./CalItem.css";
const timeSlotNum = 37;
const CalItem = props => {
   
    return (
        <tr onClick={()=>props.clickHandler(props.i)}>
          <td><h6 className="small">{props.d}</h6>{props.event}</td>
        </tr>
    )
}

export default CalItem;
