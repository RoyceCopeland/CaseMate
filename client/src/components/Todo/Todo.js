import React from 'react';
// import axios from 'axios';
// import AlbumDetail from './AlbumDetail';
import TodoItem from './TodoItem';


const Todo = props => (
    <div>
        {props.items.map(item => 
            <ul>
                <li><TodoItem item = {item} /> </li>
            </ul>
        )}
     </div>  
);
    

export default Todo;