import React, { Component } from "react";
import "./ActionItem.css";

const ActionItem = props => (
    <input
    value={props.actionItem}
    onChange={props.handleInputChange}
    name={props.id}
    placeholder="Actionable task"
  />
)


export default ActionItem;
