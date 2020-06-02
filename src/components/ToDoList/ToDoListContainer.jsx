import React from 'react';
import { connect } from 'react-redux';
import ToDoList from "./ToDoList";
import {AddTask, Completed, RemoveTask, SetToDO} from "../../redux/ToDo_reducer";

class ToDoListContainer extends React.Component {
    state ={
        items: []
    }
async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await response.json()
    this.props.SetToDO({data})

}

    render() {
        return <ToDoList items={this.props.items} AddTask={this.props.AddTask} RemoveTask={this.props.RemoveTask}
                         Completed={this.props.Completed}/>
    }
}


const mapStateToProps = (state) => {
  return {
  items : state.Todo.items
}}

export default connect(mapStateToProps, { Completed, SetToDO, RemoveTask, AddTask})(ToDoListContainer)
