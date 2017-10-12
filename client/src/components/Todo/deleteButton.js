import React from 'react';

function announceDelete(){
    alert('delete buttonclicked')
}

const DeleteButton = (state) => (
            <button onclick={announceDelete}>Delete</button>
);

export default DeleteButton;
