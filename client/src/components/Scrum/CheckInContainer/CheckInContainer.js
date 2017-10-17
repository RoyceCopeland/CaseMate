import React, { Component } from "react";
import YesterdayTodo from "./YesterdayTodo";
import TodayTodo from "./TodayTodo";
import "./CheckInContainer.css";

const CheckInContainer = props =>(
    <div>
        <YesterdayTodo todos={props.prevTodos}/>
        <TodayTodo todos={props.todos}/>
    </div>
)

export default CheckInContainer;
