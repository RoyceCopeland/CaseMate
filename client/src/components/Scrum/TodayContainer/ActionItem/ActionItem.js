import React, { Component } from "react";
import { CardPanel } from 'react-materialize'

import "./ActionItem.css";

const ActionItem = props =>(
    <CardPanel className="blue-grey lighten-2 white-text">
        <p className="action-item">{props.actionItem}</p>
    </CardPanel>
)

export default ActionItem;
