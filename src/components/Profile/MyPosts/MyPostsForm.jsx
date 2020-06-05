import React from 'react';
import s from "./Profileinfo/Profileinfo.module.css"

import { Field} from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { TextArea} from '../../preloader/FormControls';

let maxLengthCreator40 = maxLengthCreator(40)
export const AddPostForm = ({handleSubmit}) =>{
 return <form className={s.messageForm} onSubmit ={handleSubmit}>
    <Field className={s.tex} component ={TextArea} placeholder={"Share your impression"} validate={[required, maxLengthCreator40]} name = {"postMessage"}   type="text"/>
    <button  className={s.bcol}>Send</button>
  </form>
}


