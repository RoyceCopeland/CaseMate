import React, { Component } from "react";
import ActionItem from "./ActionItem"
import Calendar from "./Calendar"
import "./TodayContainer.css";

const TodayContainer = props =>(
    <div>
        {props.actionItem? <ActionItem
            actionItem={props.actionItem}
        />: <br/>}
        
        <Calendar
            handleClick={props.handleClick}
            events={props.events}
        />
    </div>
)

export default TodayContainer;
