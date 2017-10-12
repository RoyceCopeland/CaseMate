import React, { Component } from "react";
import ActionItem from './ActionItem';
import Skill from './Skill';
import Subtask from './Subtask';
import Stage from '../Stage/Stage'
import "./SprintPlanning.css";
import {Card, Col, CardPanel, Row, Button} from 'react-materialize'


const actionItemNum = 7;
class SprintPlanning extends Component {
    state = {
        skill: "Archery",
        subtask: "wind calibration",
        actionItems: []
    };

    componentDidMount() {
        this.loadSprintPlan();
    }
    loadSprintPlan = () => {
        const ai = []
        for (let i = 0; i < actionItemNum; i++) {
            ai.push("");
        }
        this.setState({actionItems: ai});
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        let newArr = this.state.actionItems.slice();
        newArr[name] = value;
        this.setState({
            actionItems: newArr
        });
      };

    renderActionItems = () => {
        const ai = []
        for (let i = 0; i < actionItemNum; i++) {
            ai.push(<ActionItem 
            actionItem={this.state.actionItems[i]} 
            id={i} 
            handleInputChange = {this.handleInputChange}
            />)
        }
        return ai;
    }
    render() {
        return (
            <Stage>
            <CardPanel className="blue-grey darken-1 white-text">
                <h1 className="card-title">Today's sprint planning</h1>
                <hr />
                <Row>
                    <Col m={6} s={12}>
                        <Skill />
                    </Col>
                    <Col m={6} s={12}>
                    <Subtask />
                    </Col>
                </Row>
                <Row>
                <CardPanel className="blue-grey darken-4 white-text">
                <form>
                    {this.renderActionItems()}
                </form>
                    </CardPanel>
                </Row>
                <hr />
                        <Row>
                            <Button className="right" node='a' href='/' waves='light'>Let's go</Button>
                        </Row>
            </CardPanel>
        </Stage >
        );
    }
}

export default SprintPlanning;
