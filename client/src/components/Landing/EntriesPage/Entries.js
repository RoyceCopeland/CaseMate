import React, { Component } from "react";
import DeleteBtn from "./components/DeleteBtn";
import API from "../../../utils/API";
import "./Entries.css"
import { Col, Row, Container } from "./components/Grid";
//import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "./components/Form";

class Entries extends Component {

  //   class Entries extends Component {
  //     // Setting our component's initial state
  state = {
   // entries: [],
    date: "",
    title: "",
    body: ""
  };




  //   // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //   // When the form is submitted, use the API.saveEntry method to save the entry data
  
 

  render() {
    return (
      <div className="new-entry">
        <Container fluid>
          <Row className="entryBlock">
            <Col size="md-6 sm-12">

              <h5>New Journal Entry</h5>

              <form>
                <Input
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  name="date"
                  type='date'
                />
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title"
                />
                <TextArea
                  value={this.state.body}
                  onChange={this.handleInputChange}
                  name="body"
                  placeholder="type your journal entry here"
                />

                <FormBtn 
                
                  onClick={this.props.cancel}
                >
                  Cancel
              </FormBtn>
             
                <FormBtn
             disabled={!(this.state.title && this.state.date && this.state.body)}
                  onClick={(e)=>{e.preventDefault(); return this.props.clickHandler(this.state.title, this.state.date, this.state.body)}}
                >
                  Submit
              </FormBtn>
              </form>
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}

export default Entries;
