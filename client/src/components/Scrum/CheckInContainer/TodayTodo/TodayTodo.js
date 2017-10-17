import React, { Component } from "react";
import "./TodayTodo.css";
import { Icon, CardPanel } from 'react-materialize'

const TodayTodo = props =>(
    <div>
        <h7>Today's Todos</h7>
        {props.todos.map(todo =>
            <CardPanel className="card-panel-todos blue-grey lighten-2 white-text">
                <p>{todo}</p>
            </CardPanel>
        )}
    </div>
)

export default TodayTodo;
