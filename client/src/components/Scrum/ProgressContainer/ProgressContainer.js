import React, { Component } from "react";
import SprintProgress from "./SprintProgress";
import SkillProgress from "./SkillProgress";
import YearProgress from "./YearProgress";
import { Card, Col, Row, CardPanel } from 'react-materialize'

import "./ProgressContainer.css";

const ProgressContainer = props =>(
    <div>
        <Row>
            <Col className="center circles" s={4}>
                <img src="img/3.png" height="100px" />
                <p>Sprint</p>
            </Col>
            <Col className="center circles" s={4}>
                <img src="img/13.png" height="100px" />
                <p>Skill</p>
            </Col>
            <Col className="center circles" s={4}>
                <img src="img/152.png" height="100px" />
                <p>New You</p>
            </Col>
        </Row>
    </div>
)

export default ProgressContainer;
