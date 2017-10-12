import React from "react";
import "./ToDo.css";

class ToDoItem extends React.Component {
	state = { completed: false }

	toggleItem = () => {
		this.setState({
			completed: !this.state.completed
		})
	}

	render = () => (
		<p 
			className={`${this.props.styling} ${this.state.completed ? 'strikethrough' : ''}`}
			//className={this.props.styling}
			onClick={this.toggleItem}
		>
	  		{this.props.text}
	 	</p>
	)
}
// const ToDoItem = ({ completed, text }) => 
  
// ;

export default ToDoItem;
