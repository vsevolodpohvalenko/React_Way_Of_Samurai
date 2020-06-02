import React from 'react';
import s from './ToDoList.module.css';
import {CreateField, Input} from "../preloader/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";
let MaxLength30 = maxLengthCreator(30)

export const AddToDoForm =(props) => {
    return <form className={s.make} onSubmit={props.handleSubmit}>
        {CreateField("Just Do IT", "newTask", [required, MaxLength30], Input)}
        <button className={s.Push}>Push</button>
    </form>

}
