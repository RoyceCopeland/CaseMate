import React, { Component } from "react";
import { Button, Icon, Modal, CardPanel } from "react-materialize";
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
import App from "./ChatExample/App";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

class Landing extends Component {
  // Setting our component's initial state

  state = {
    newEntry: false,
    events: [],
    componentClasses: ["chat"],
    hidden: true
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

  toggleCard = hide => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    console.log("state is", this.state.hidden);
    return (
      <div>
        <div>
          <Nav
          click={this.entryClickHandler}
          deAuth={this.props.deAuth}
          chat={this.props.chat}/>
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

        <div id="chatBox">
          {/* <Row id="chatBox"> */}
            {/* <Col l={3} m={3} s={12} offset={"l8 m8"}> */}
              {/* <Row> */}
                {/* <Col l={12} m={12} s={12} offset={"l8 m8"}> */}
                  <div
                    className={this.state.componentClasses.join(" ")}
                    onClick={() => {
                      this.setState({ componentClasses: ["chat", "show"] });
                    }}
                  >
                    <span 
                    className="chatExpand"
                      style={
                        this.state.componentClasses.includes("show")
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    >
                      {" "}
                      Chat{" "}
                    </span>
                    {this.state.componentClasses.includes("show") ? (
                      <App />
                    ) : (
                      ""
                    )}
                    <span
                      className="exit"
                      style={
                        this.state.componentClasses.includes("show")
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      onClick={e => {
                        e.stopPropagation();
                        this.setState({ componentClasses: ["chat"] });
                      }}
                    >
                      {" "}
                      Close{" "}
                    </span>
                  </div>
                {/* </Col> */}
              {/* </Row> */}
            {/* </Col> */}
          {/* </Row> */}
        </div>
      </div>
    );
  }
}

export default Landing;
