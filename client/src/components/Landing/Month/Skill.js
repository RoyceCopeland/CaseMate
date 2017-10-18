import React, { Component } from "react";

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {skill: "", motivation: ""}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({skill: event.target.skill, motivation: event.target.motivation});
      }

      handleSubmit(event) {
        alert('A skill was added: ' + this.state.skill);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="input-field col s6">
                  <input value="" id="skill" type="text"></input>
                  <label for="skill">skill</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                  <input value="" id="motivation" type="text"></input>
                  <label for="motivation">motivation</label>
                </div>
            </div>
                <div className="row">
                    <div className="input-field col s6">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
};
export default Skill;