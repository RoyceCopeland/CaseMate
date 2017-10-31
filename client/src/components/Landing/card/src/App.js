import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  state = {
    componentClasses: ['chat'],

  }
  render() {
    console.log("state", this.state);
    return (
      <div className={this.state.componentClasses.join(' ')} onClick={()=>{this.setState({componentClasses:['chat', 'show']})}}>
        Chat 
        <span className="exit" style={this.state.componentClasses.includes('show')? {display:'block'}: {display:'none'}} onClick={(e)=>{e.stopPropagation();this.setState({componentClasses:['chat']})}}> X </span>
      </div>
    );
  }
}

export default App;
