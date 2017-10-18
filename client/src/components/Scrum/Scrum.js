import React, { Component } from "react";
import API from "../../utils/API";
import TodayContainer from "./TodayContainer";
import ProgressContainer from "./ProgressContainer";
import Stage from '../Stage/Stage'
import CheckInContainer from "./CheckInContainer";
import FirstLogin from '../../utils/FirstLogin';
import { Card, Col, Row, CardPanel, Button } from 'react-materialize'

import "./Scrum.css";

class Scrum extends Component {
    state = {
        events: [
            { event: "drop off kids", time: 6, duration: 1 },
            { event: "breakfast date", time: 7, duration: 1 },
            { event: "dentist", time: 13, duration: 1 },
            { event: "meeting with new client", time: 10, duration: 1.5 },
            { event: "stackholder meeting", time: 15, duration: 2 },
            { event: "grocery shop", time: 17, duration: .5 }
        ],
        sprintNum: 3,
        skill: "Archery",
        date: new Date().toLocaleString('en-US',
            {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
        ),
        prevTodos: ["practice distance shooting", "run 10 miles"],
        todos: ["practice estimating wind speeds", "walk the dog", "call eye doctor"],
        actionItem: "practice estimating wind speeds",
        sprintDays: 3,
        skillDays: 10,
        yearDays: 152
    };


    componentDidMount() {
        this.loadData();
        FirstLogin.save('loggedin');
    }

    loadData = () => {
        // API.getSkill().then();
        // API.getCalItems().then();
        // API.getSprintNum().then();
        // API.getDate().then();
        // API.prevTodo().then();
        // API.getTodos().then();
        // API.getSprintDays().then();
        // API.getSkillDays().then();
        // API.getYearDays().then();
    }

    handleCalClick = id => {
        let newArr = this.state.events.slice();
        let time = Math.floor(id / 2);
        time += 6;
        console.log("id is", time);
        newArr.push({ event: this.state.actionItem, time: time });
        this.setState({ events: newArr, actionItem: "" });
    }

    render() {
        return (
            <Stage>
                <CardPanel className="blue-grey darken-1 white-text">
                    <h1 className="card-title">Sprint {this.state.sprintNum} of {this.state.skill}</h1>
                    <h2 className="card-date">Today is {this.state.date}</h2>
                    <hr />
                    <Row>
                        <Col s={12} m={6}>
                            <TodayContainer
                                events={this.state.events}
                                skill={this.state.skill}
                                date={this.state.date}
                                actionItem={this.state.actionItem}
                                sprintNum={this.state.sprintNum}
                                handleClick={this.handleCalClick}
                            />
                        </Col>
                        <Col s={12} m={6}>
                            <Row>
                                <ProgressContainer
                                    skillDays={this.state.skillDays}
                                    sprintDays={this.state.sprintDays}
                                    yearDays={this.state.yearDays}
                                />
                            </Row>
                            <hr />
                            <Row>
                                <CheckInContainer
                                    todos={this.state.todos}
                                    prevTodos={this.state.prevTodos}
                                />
                            </Row>
                            <hr />
                            <Row>
                                <Button node='a' href='/' waves='light'>Let's go</Button>
                            </Row>
                        </Col>
                    </Row>
                </CardPanel>
            </Stage >
        );
    }
}

export default Scrum;
