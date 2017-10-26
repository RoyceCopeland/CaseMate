import React, { Component } from "react";
import { Button, Icon, Modal } from "react-materialize";
import Nav from "./Nav";
import { Timeline, TimelineEvent, TimelineBlip } from "./Timeline";
import Entries from "./EntriesPage";
import "./Landing.css";
import { Row, Col, Card, CardTitle, Tabs, Tab } from "react-materialize";
import MessageBox from "./Chatbox";

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
    newEntry: false,
    events: [
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          "Shut up"
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          " I received the payment for $543. Should be shipping the item within a couple of hours."
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          " I received the payment for $543. Should be shipping the item within a couple of hours."
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          "Shut up"
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          " I received the payment for $543. Should be shipping the item within a couple of hours."
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          " I received the payment for $543. Should be shipping the item within a couple of hours."
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          "Shut up"
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          " I received the payment for $543. Should be shipping the item within a couple of hours."
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          " I received the payment for $543. Should be shipping the item within a couple of hours."
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          "No YOU shut up"
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          " I received the payment for $543. Should be shipping the item within a couple of hours."
      },
      {
        title: "You sent an email to John Doe",
        createdAt: "2016-09-12 10:06 PM",
        text:
          " I received the payment for $543. Should be shipping the item within a couple of hours."
      }
    ]
  };

  // When the component mounts, load all component data and save them to this.state.landing
  componentDidMount() {
    this.loadBackground();
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
    //fetch stuff from db and setState({entries});
  }

  //make a function to get from db on journal entry submit

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  entryClickHandler = () => {
    this.setState({ newEntry: !this.state.newEntry });
  };

  tick() {
    this.setState({
      time: newTime()
    });
  }
  render() {
    return (
      <div>
        <div>
          <Nav click={this.entryClickHandler} />
        </div>

        <div>
          <Row id="TimelineBlock">
            <Col l={5} m={6} s={12} offset={"l1 m1"}>
             
       
       
             
              <Timeline onMouseMove={this.handleMouseMove}>
                
                {/*Use map here through this.state.entries*/}

                {this.state.events.map(event => (
                    <TimelineEvent  title={event.title}
                    createdAt={event.createdAt}>
                    {event.text}
                    </TimelineEvent>
                )
                )}

             
              </Timeline>
            </Col>
            <Col l={5} m={6} s={10} offset={"l1 m1"}>
            {this.state.newEntry ? <Entries cancel={this.entryClickHandler}/> : ""}
            </Col>

  


          </Row>

         
        </div>
      
        <div>
       
<MessageBox/>
      
        </div>
      
      </div>
    );
  }
}

export default Landing;
