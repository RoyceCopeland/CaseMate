import React, { Component } from "react";
import Agenda from "./Agenda";
import { Button, Icon, Modal } from 'react-materialize'
import Nav from "./Nav";
import SidebarDay from "./SidebarDay";
//import Clock from "./Clock";
//import backgroundAPI from "../../utils/backgroundAPI";
import { Timeline, TimelineEvent, TimelineBlip } from "./Timeline";
import Entries from "../Landing/EntriesPage";
import NewEntry from "./NewEntry";
import "./Landing.css";
import { Row, Col, Card, CardTitle, Tabs, Tab } from 'react-materialize';


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

function newTime() {
    return new Date().toLocaleString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric"
    });
}

class Landing extends Component {
    // Setting our component's initial state

    // state = {
    //   skills: ["skill1", "skill2", "skill3"],
    //   subtasks: ["subtask1", "subtask2", "subtask3", "subtask4"],
    //   actionItems: ["actionItem1", "actionItem2", "actionItem3"],
    //   time: newTime(),
    //   todo: ["todo1", "todo2", "todo3"],
    //   events: [
    //     { event: "drop off kids", time: 6, duration: 1 },
    //     { event: "breakfast date", time: 7, duration: 1 },
    //     { event: "dentist", time: 13, duration: 1 },
    //     { event: "meeting with new client", time: 10, duration: 1.5 },
    //     { event: "stackholder meeting", time: 15, duration: 2 },
    //     { event: "grocery shop", time: 17, duration: 0.5 },
    //     { event: "practice estimating wind speeds", time: 8, duration: 0.5 }
    //   ],
    //   quote: "Quotey quote",
    //   backgroundURL: ""
    // };

    /*  state = {
         entries: [
             {title: "Joe sent something",
               createdAt: "2016-09-12 10:06 PM",
               blurb:  "I received the payment for $543. Should be shipping the item within a couple of hours."
               },
               {}
           ]
     } */

     state = {
         newEntry: false
     }

    // When the component mounts, load all component data and save them to this.state.landing
    componentDidMount() {
        this.loadBackground();
    }
    //  loadBackground(){
    //      backgroundAPI.getBackground()
    //      .then(res => console.log(res))
    //      .catch(err => console.log(err));

    //      //this.setState({ breeds: res.data.message })
    //  }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
        //fetch stuff from db and setState({entries});
    }

    //make a function to get from db on journal entry submit

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    entryClickHandler=()=>{
        this.setState({newEntry: !this.state.newEntry});
    }

    tick() {
        this.setState({
            time: newTime()
        });
    }
    render() {
        return (
            <div>
                <div>



                    {/* <SidebarDay events={this.state.events} /> */}

                    <Nav click={this.entryClickHandler}/>
                </div>

                <div>
                    <Row id='TimelineBlock'>
                        <Col l={5} m={6} s={12} offset={'l1 m1'}>
                            <Timeline onMouseMove={this.handleMouseMove}>
                                {/*Use map here through this.state.entries*/}
                                <TimelineEvent
                                    title="John Doe sent a SMS" /*title=props.title*/
                                    createdAt="2016-09-12 10:06 PM"
                                //   icon={<i className="material-icons md-18">textsms</i>}
                                >
                                    I received the payment for $543. Should be shipping the item
              within a couple of hours.
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
            <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
            <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
            <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
            <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
                                <TimelineEvent
                                    title="You sent an email to John Doe"
                                    createdAt="2016-09-11 09:06 AM"
                                //   icon={<i className="material-icons md-18">email</i>}
                                >
                                    Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>

                            </Timeline>

                        </Col>

                            {this.state.newEntry?<NewEntry />:""}
    
                    </Row>


                </div>







            </div >
        );
    }
}

export default Landing;
