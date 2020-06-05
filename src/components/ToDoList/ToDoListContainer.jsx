import React from 'react';
import ToDoList from "./ToDoList";


class ToDoListContainer extends React.Component {

// async componentDidMount() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//     const data = await response.json()
//     this.props.SetToDO({data})
//
// }

    render() {
        return <ToDoList />
    }
}
export default ToDoListContainer;



