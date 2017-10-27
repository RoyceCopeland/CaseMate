import React, { Component } from "react";
import { Button, Icon, Modal } from "react-materialize";
import Nav from "./Nav";
import API from "../../utils/API";

import { Timeline, TimelineEvent, TimelineBlip } from "./Timeline";
import Entries from "./EntriesPage";
import "./Landing.css";
import { Row, Col, Card, CardTitle, Tabs, Tab } from "react-materialize";
import { MessageBox,
  ChatItem,
  SystemMessage,
  ChatList,
  MessageList,
  Input,
  ChatButton,
  Avatar,
  Navbar,
  Dropdown,
  SideBar,
  Popup,
  PhotoMessage } from "./Chatbox";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


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
    events: []
  };

  // When the component mounts, load all component data and save them to this.state.landing
 
  // Loads all entries  and sets them to this.state.entries
 loadEntries = () => {
    API.getEntries()
      .then(res =>{
        console.log("loadEntries hit", res)
        this.setState({events: res.data})
      }) 
      .catch(err => console.log(err));
    };


  componentDidMount() {
   this.loadEntries();

  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  entryClickHandler = () => {
    this.setState({ newEntry: !this.state.newEntry });
  };

  handleFormSubmit = (author, title, body) => {
      API.saveEntry({
        title: title,
        author: author,
        body: body
      })
      //   // Then reload entries from the database

       .then(()=>{
        this.loadEntries();
        this.entryClickHandler();
       })
        .catch(err => console.log(err));
  };


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
                    <TimelineEvent  title={event.title}>
                    {event.body}
                    </TimelineEvent>
                )
                )}

             
              </Timeline>


     
      

            </Col>
            <Col l={5} m={6} s={10} offset={"l1 m1"}>
            {this.state.newEntry ? <Entries cancel={this.entryClickHandler} clickHandler={this.handleFormSubmit}/> : ""}
            </Col>

  


          </Row>

         
        </div>
      
        <div>
        <Row id="chatBox">
            <Col l={5} m={6} s={12} offset={"l1 m1"}>
     navbar
       <Navbar/>
     chatItem
       <ChatItem/>
    {/* SystemMessage
       <SystemMessage/>
     ChatList
       <ChatList/>
      MessageList
       <MessageList/>
       MessageBox
       <MessageBox/>
    Input
       <Input/>
     ChatButton
       <ChatButton/>
      Avatar
       <Avatar/>
   
     DropDown
       <Dropdown/>
      SideBar
       <SideBar/> */}
  
   
   
     
      </Col>
      </Row>
        </div>
      
      </div>
    );
  }
}

export default Landing;
