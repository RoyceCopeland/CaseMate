import React, { Component } from "react";
//import Agenda from "./Agenda";
//import DayPlanner from "./DayPlanner";
//import Quote from "./Quote";
//import Streak from "./Streak";
//import Skill from "./Month/Skill"
//import Todo from "./Agenda/Day/Todo";
//import API from "../../utils/API";
import Nav from "./Nav";
import SidebarDay from "./SidebarDay";
import Clock from "./Clock";
import backgroundAPI from "../../utils/backgroundAPI";
import {Timeline, TimelineEvent, TimelineBlip} from "./Timeline";

import "./Landing.css";



// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

function newTime(){
    return new Date().toLocaleString('en-US',{hour12: true, hour: 'numeric', minute: 'numeric'});
}

class Landing extends Component {
  // Setting our component's initial state
    state = {
        skills: ["skill1","skill2", "skill3"], 
        subtasks: ["subtask1", "subtask2", "subtask3", "subtask4"], 
        actionItems: ["actionItem1", "actionItem2", "actionItem3"], 
        time: newTime(), 
        todo:["todo1", "todo2", "todo3"], 
        events: [
            { event: "drop off kids", time: 6, duration: 1 },
            { event: "breakfast date", time: 7, duration: 1 },
            { event: "dentist", time: 13, duration: 1 },
            { event: "meeting with new client", time: 10, duration: 1.5 },
            { event: "stackholder meeting", time: 15, duration: 2 },
            { event: "grocery shop", time: 17, duration: .5 },
            { event: "practice estimating wind speeds", time:8 , duration: .5 }
        ],
        quote: "Quotey quote", 
        backgroundURL: ""
    };

// When the component mounts, load all component data and save them to this.state.landing
    componentDidMount() {
        this.loadBackground();
    }
    loadBackground(){
        backgroundAPI.getBackground()
        .then(res => console.log(res))
        .catch(err => console.log(err));

        //this.setState({ breeds: res.data.message })
    }

//   loadLanding = () => {
//      API.getSkills().then(res => this.setState({landing: skills: []}).catch(err => console.log(err));
//      API.getTodo().then(res => this.setState({landing: todo: []}).catch(err => console.log(err));
//      API.getEvent().then(res => this.setState({landing: events: []}).catch(err => console.log(err));        
//      API.getQuote().then(res => this.setState({landing: quote: ""}).catch(err => console.log(err));
//      API.getStreak().then(res => this.setState({landing: streak: ""}).catch(err => console.log(err));
//      };
//  
// }

    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
          time: newTime()
        });
    }
    render() {
        return (
            <div>
                <SidebarDay events={this.state.events}/>
                <Nav />
                <Clock 
                time={this.state.time}
                quote={"There is no excellence in archery without great labour."} />
            </div>
        );
    }
}

export default Landing;
