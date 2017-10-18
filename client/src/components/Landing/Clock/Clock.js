import React from "react";
import {Col, Card} from 'react-materialize'
import "./Clock.css";


const Clock = props =>
    <div className="clock-wrapper">
        <Card
        className='blue-grey darken-1'
        textClassName='white-text'>
            <h1>{props.time}</h1>
            <hr />
            <p className="quote">"{props.quote}"</p>
        </Card>
    </div>
;

export default Clock;