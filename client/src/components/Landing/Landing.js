import React, { Component } from "react";
import { Button, Icon, Modal, CardPanel } from "react-materialize";
import Nav from "./Nav";
import API from "../../utils/API";
import { Timeline, TimelineEvent, TimelineBlip } from "./Timeline";
import Entries from "./EntriesPage";
import "./Landing.css";
import { Row, Col, Card, Carddate, Tabs, Tab } from "react-materialize";
import App from "./ChatExample/App";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

class Landing extends Component {
  // Setting our component's initial state
  state = {
    newEntry: false,
    events: [],
    componentClasses: ["chat"],
    hidden: true,
    showChat: false
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

  showChatClickHandler = () => {
    if (this.state.showChat) {
      this.setState({
        componentClasses: ["chat"],
        showChat: !this.state.showChat
      });
    } else {
      this.setState({
        componentClasses: ["chat", "show"],
        showChat: !this.state.showChat
      });
    }
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
      })
      .catch(err => console.log(err));
  };

  toggleCard = hide => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    return (
      <div>
        <div>
          <Nav
            click={this.entryClickHandler}
            deAuth={this.props.deAuth}
            showChatHandler={this.showChatClickHandler}
          />
        </div>

        <div>
          {this.state.newEntry ? (
            <Entries
              cancel={this.entryClickHandler}
              clickHandler={this.handleFormSubmit}
            />
          ) : (
            ""
          )}

          <Row id="TimelineBlock">
            <Col l={5} m={5} s={12} offset={"l1 m1"}>
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

            <div id="chatBox">
              <div
                className={this.state.componentClasses.join(" ")}
                onClick={() => {
                  this.setState({
                    componentClasses: ["chat", "show"],
                    showChat: !this.state.showChat
                  });
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
                {this.state.componentClasses.includes("show") ? <App /> : ""}
                <span
                  className="exit"
                  style={
                    this.state.componentClasses.includes("show")
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  onClick={e => {
                    e.stopPropagation();
                    this.setState({
                      componentClasses: ["chat"],
                      showChat: !this.state.showChat
                    });
                  }}
                >
                  {" "}
                  Close{" "}
                </span>
              </div>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default Landing;
