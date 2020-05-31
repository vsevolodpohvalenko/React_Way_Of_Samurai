import React from 'react';
import { connect } from 'react-redux';
import ToDoList from "./ToDoList";
import {addTask, Completed} from "../../redux/ToDo_reducer";
const ToDoListContainer =(props) => {
 return <ToDoList items = {props.items} addTask={props.addTask} Completed={props.Completed} />
}
  

const mapStateToProps = (state) => {
  return {
  items : state.Todo.items
}}

export default connect(mapStateToProps, {addTask, Completed})(ToDoListContainer)
