import React from 'react';
import EditButton from './editButton'
import DeleteButton from './deleteButton';

const TodoItem = props => (
    <ul style = {styles.containerStyle}>{props.item}
    <EditButton />
    <DeleteButton />
    </ul>
);

export default TodoItem;

const styles ={
    containerStyle: {
        backgroundColor: '#000000'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}       

