import React, {useState, useEffect, useReducer} from 'react';
import s from './ToDoList.module.css';
import cn from "classnames";
import {AddToDoForm} from "./AddToDo";
import {reduxForm} from "redux-form";
import {ToDo_Reducer} from '../../redux/ToDo_reducer'


const ToDoList = () => {
    let SetChecked = (id) => {
        dispatch({type: "COMPLETED", payload: id})
    }
    let OnRemoveTask = (id) =>{
        dispatch({type: "REMOVE_ONE", payload: id})}
    const [state, dispatch] = useReducer(ToDo_Reducer, JSON.parse  (localStorage.getItem('Todo')) || [])



    let OnEnterSubmit = e => ({newTask}) => {
        if (e.key === 'Enter') {
          dispatch({
            type: "ON_ENTER_ADD",
            payload: newTask
          })
        }}
    

        debugger
    useEffect(() => {localStorage.setItem('Todo', JSON.stringify(state))}, [state])
    let AddNewTask = ({newTask}) => {
    dispatch({type: "ADD",  payload: newTask})}

    let CreateTask = ({id, index, title, completed}) => {
        return <li><span className={cn({[s.completed]: completed === true})}>
        <input checked={completed} onChange={() => {SetChecked(id)}} type="checkbox"/> <strong>{index}
    </strong>&nbsp;{title} </span>
            <button className={s.cross} onClick={() => {OnRemoveTask(id)}}>&times;</button>
        </li>
    }

    const AddToDoReduxForm = reduxForm({
        form: 'add-task'
    })(AddToDoForm)



    
     let TasksElements = state.map((t, index) => <CreateTask key={index} completed={t.completed} id={t.id}
                                                        index={index+ 1} title={t.title}/>)
    return <div className={s.item}>

        <h1>Make your day important</h1>
        <ul>
            {TasksElements}
        </ul>
        {state.length === 0 && <div className={s.Null}><h3>Make task on this day, it's worth it</h3></div>}
        <AddToDoReduxForm onKeyPress={OnEnterSubmit} onSubmit={AddNewTask}/>
    </div>
}


export default ToDoList