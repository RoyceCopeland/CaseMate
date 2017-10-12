import React from "react";
import Subtasks from "./Subtasks";

const Month = props => (
    <ul>

        {props.subtasks.map(subtask =>
        <Subtasks subtask={subtask}/>
        )}
    </ul>
    
);

export default Month;















//   // Setting our component's initial state
//   state = {
//     subtasks: [],  
//   };

//   // When the component mounts, load all subtasks and save them to this.state.subtasks
//   componentDidMount() {
//     this.loadSubtasks();
//   }

//   // Loads all subtasks  and sets them to this.state.subtasks
//   loadSubtasks = () => {
//     API.getSubtasks()
//       .then(res =>
//         this.setState({ subtasks: res.data})
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a subtask from the database with a given id, then reloads subtasks from the db
//   deleteSubtask = id => {
//     API.deleteSubtask(id)
//       .then(res => this.loadSubtasks())
//       .catch(err => console.log(err));
//   };

//   // Handles updating component state when the user types into the input field
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, use the API.saveSubtask method to save the subtask data
//   // Then reload subtasks from the database
//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.subtasks) {
//       API.saveSubtask({
//         task: this.state.subtasks,
//       })
//         .then(res => this.loadSubtasks())
//         .catch(err => console.log(err));
//     }
//   };

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>Subtasks This Month</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.subtasks}
//                 onChange={this.handleInputChange}
               
//               />
             
            
//               <FormBtn
//                 disabled={!(this.state.subtasks)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit New Subtask
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>Subtasks to be Completed</h1>
//             </Jumbotron>
//             {this.state.subtasks.length ? (
//               <List>
//                 {this.state.subtasks.map(book => {
//                   return (
//                     <ListItem key={task._id}>
//                       <a href={"/tasks/" + task._id}>
//                         <strong>
//                           {task.name} by {book.author}
//                         </strong>
//                       </a>
//                       <DeleteBtn onClick={() => this.deleteSubtask(task._id)} />
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

