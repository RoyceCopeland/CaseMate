import React, { Component } from "react";
import { Button, Icon, Modal } from "react-materialize";
import Nav from "./Nav";
import API from "../../utils/API";

import { Timeline, TimelineEvent, TimelineBlip } from "./Timeline";
import Entries from "./EntriesPage";
import "./Landing.css";
import { Row, Col, Card, Carddate, Tabs, Tab } from "react-materialize";
import {
  MessageBox,
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
  PhotoMessage
} from "./Chatbox";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

class Landing extends Component {
  // Setting our component's initial state

  /*  state = {
         entries: [
             {date: "Joe sent something",
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
      .then(res => {
        console.log("loadEntries hit", res);
        this.setState({ events: res.data });
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

  handleFormSubmit = (date, title, body) => {
    API.saveEntry({
      date: date,
      title: title,
      body: body
    })
      //   // Then reload entries from the database

      .then(() => {
        this.loadEntries();
        this.entryClickHandler();
        this.logOutClickHandler();
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
            <Col l={5} m={6} s={12} offset={"l1 m1"} className="Timeline">
              <Timeline onMouseMove={this.handleMouseMove}>
                {/*Use map here through this.state.entries*/}

                {this.state.events.map(event => (
                  <TimelineEvent title={event.title} date={event.date}>
                    {event.body.split("\n").map(i => {
                      console.log(i);
                      return (
                        <div>
                          <br />
                          {i}
                        </div>
                      );
                    })}
                  </TimelineEvent>
                ))}
              </Timeline>
            </Col>
            <Col l={5} m={6} s={10} offset={"l1 m1"}>
              {this.state.newEntry ? (
                <Entries
                  cancel={this.entryClickHandler}
                  clickHandler={this.handleFormSubmit}
                />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </div>

        <div>
          <Row id="chatBox">
            <Col l={3} m={3} s={12} offset={"l8 m8"}>

 
            <Navbar />

              <MessageList
                className="message-list"
                lockable={true}
                toBottomHeight={"100%"}
                dataSource={[
                  {
                    position: "right",
                    type: "text",
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                    date: new Date()
                  },
                  {
                    position: "left",
                    type: "text",
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                    date: new Date()
                  },
                  
                  {
                    position: "left",
                    type: "text",
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                    date: new Date()
                  },
                  {
                    position: "right",
                    type: "text",
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                    date: new Date()
                  }
                  
                ]}
                
              />
              <Input
    placeholder="Type here..."
    multiline={true}
    buttons={
        <Button
            color='white'
            backgroundColor='black'
            text='Send'/>
    }/>
              chat item
              <ChatItem
    avatar={'https://facebook.github.io/react/img/logo.svg'}
    alt={'Reactjs'}
    title={'Facebook'}
    subtitle={'What are you doing?'}
    date={new Date()}
    unread={0} />
          INPUT


<Input
    placeholder="Type here..."
    multiline={true}
    buttons={
        <Button
            color='white'
            backgroundColor='black'
            text='Send'/>
    }/>

// clear text eg:
<Input
    ref='input'
    placeholder="Type here..."/>
              <SystemMessage />
              ChatList
              <ChatList />
             
              <MessageBox />
          popup
              <Popup
    show={this.state.show}
    header='Lorem ipsum dolor sit amet.'
    headerButtons={[{
        type: 'transparent',
        color:'black',
        text: 'close',
        onClick: () => {
            this.setState({show: false})
        }
    }]}
    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!'
    footerButtons={[{
        color:'white',
        backgroundColor:'#F5F5F5',
        text:"Vazgeç",
    },{
        color:'white',
        backgroundColor:'lightgreen',
        text:"Tamam",
    }]}/>

           
              <Avatar />
              DropDown
              <Dropdown />

<Dropdown
    buttonProps={{
        text: 'Dropdown',
    }}
    items={[
        'merhaba',
        'lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet',
    ]}/>

<MessageBox
    position={'left'}
    type={'photo'}
    text={'react.svg'}
    data={{
        uri: 'https://facebook.github.io/react/img/logo.svg',
        status: {
            click: false,
            loading: 0,
        }
    }}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Landing;
