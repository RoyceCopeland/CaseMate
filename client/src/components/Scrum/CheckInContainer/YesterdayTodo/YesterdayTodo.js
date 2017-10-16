import React, { Component } from "react";
import "./YesterdayTodo.css";
import { Icon, CardPanel } from 'react-materialize'


const YesterdayTodo = props => (
    <div>
        <h7>Yesterday's Todos</h7>
        {props.todos.map(todo =>
            <CardPanel className="card-panel-todos blue-grey lighten-2 white-text">
                <p className="strike">{todo}</p>
            </CardPanel>
        )}
    </div>
)

export default YesterdayTodo;
