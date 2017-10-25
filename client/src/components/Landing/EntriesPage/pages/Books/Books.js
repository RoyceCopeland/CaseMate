import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../../../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {

//   class Entries extends Component {
//     // Setting our component's initial state
    state = {
      entries: [],
      title: "",
      author: "",
      body: ""
    };


  // When the component mounts, load all entries and save them to this.state.entries
  componentDidMount() {
    this.loadEntries();
  }


  // Loads all entries  and sets them to this.state.entries
  loadEntries = () => {
    API.getEntries()
      .then(res =>
        this.setState({ entries: res.data, title: "", author: "", body: "" })
      )
      .catch(err => console.log(err));
  };


//   // Deletes an entry from the database with a given id, then reloads entries from the db
  deleteEntry = id => {
    API.deleteEntry(id)
      .then(res => this.loadEntries())
      .catch(err => console.log(err));
  };


//   // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//   // When the form is submitted, use the API.saveEntry method to save the entry data
//   // Then reload entries from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveEntry({
        title: this.state.title,
        author: this.state.author,
        body: this.state.body
      })
        .then(res => this.loadEntries())
        .catch(err => console.log(err));
    }
  };






  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          
              <h5>New Journal Entry</h5>
         
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="XXXXXXXXXXX"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="XXXXXXXXXXXXX"
              />
              <TextArea
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="type here ..."
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Cancel
              </FormBtn>
              <b></b>
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Books;
