import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Input from './Input'

export default function ToDoItem(props) {
  
const handleDelete = ()=>{

  // fetch for delete here
}
  return (
   <React.Fragment>
      <ListItem>
        <ListItemText primary={props.todo.text} />
        <Input loadPage={props.loadPage} todo={props.todo}></Input>
      <IconButton onClick = {handleDelete}>
        <DeleteIcon></DeleteIcon>
      </IconButton>

      </ListItem>
      <Divider />
   </React.Fragment>      
  );
}
