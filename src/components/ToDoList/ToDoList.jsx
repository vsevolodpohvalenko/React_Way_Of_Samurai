import React from 'react';
import s from './ToDoList.module.css';
import cn from "classnames";

const ToDoList =({items, Completed}) => {
  debugger
  let CreateTask = ({id, index, text, completed}) => {
    console.log("completed", completed)
    return <li ><span className={cn({[s.completed] : completed === true})}><input onClick={() => Completed(id)} type="checkbox"/> <strong>{index}
    </strong>&nbsp;{text} </span>
    <button>&times;</button>
    </li>
  }
let TasksElements = items.map((t, index) => <CreateTask key={t.id} completed = {t.completed} id={t.id} index = {index +1} text ={t.text} />)
      return <div className={s.item}>
        <h1>Make your day important</h1>
        <ul>
          {TasksElements}
        </ul>
      </div>
      }
    

export default ToDoList