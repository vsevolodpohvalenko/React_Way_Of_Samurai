import React from 'react';
import s from './ToDoList.module.css';
import {CreateField, Input} from "../../FormControl/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";
let MaxLength50 = maxLengthCreator(50)

export const AddToDoForm =(props) => {
    return <form className={s.make} onKeyPress={props.onKeyPress} onSubmit={props.handleSubmit}>
        {CreateField("Just Do IT", "newTask", [required, MaxLength50], Input)}
        <button className={s.Push}>Push</button>
    </form>

}
