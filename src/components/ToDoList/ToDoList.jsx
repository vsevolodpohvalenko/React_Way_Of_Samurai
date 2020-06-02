import React, {useState} from 'react';
import s from './ToDoList.module.css';
import cn from "classnames";
import {AddToDoForm } from "./AddToDo";
import {reduxForm} from "redux-form";



const ToDoList =({items, Completed, RemoveTask, AddTask}) => {

// let [RemoveTask, setRemoveTask] = useState()

  let CreateTask = ({id, index, title, completed}) => {
    return <li ><span className={cn({[s.completed] : completed === true})}><input checked={completed} onClick={() => Completed(id)} type="checkbox"/> <strong>{index}
    </strong>&nbsp;{title} </span>
    <button className={s.cross} onClick={() => {RemoveTask(id)}}>&times;</button>
    </li>
  }

    const AddToDoReduxForm = reduxForm({
        form: 'add-task'
    })(AddToDoForm)

    let AddNewTask = ({newTask}) => {
        AddTask(newTask)

    }
let TasksElements = items.map((t, index) => <CreateTask key={t.id} completed = {t.completed} id={t.id} index = {index +1} title ={t.title} />)
      return <div className={s.item}>

        <h1>Make your day important</h1>
        <ul>
          {TasksElements}
        </ul>
          {items.length === 0 && <div className={s.Null}><h3>Make task on this day, it's worth it</h3></div>}
          <AddToDoReduxForm onSubmit = {AddNewTask}/>
      </div>
      }
    

export default ToDoList