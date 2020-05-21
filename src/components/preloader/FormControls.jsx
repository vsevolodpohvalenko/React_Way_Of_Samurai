import React from 'react' 
import s from './FormControls.module.css'
import {Field} from "redux-form";
import {required} from "../../utils/validators";
const FormControl = ({input, meta,  ...props}) => {
    const indicate = meta.error && meta.touched
    return <div className ={s.formControl + ' ' + (indicate ? s.error : "")}>
        <div>{props.children}</div>
    {indicate && <span>{meta.error}</span>}
    </div>
}
export const TextArea = (props) => {
    const {input, meta,  ...Restprops} = props
return <FormControl {...props} > <textarea {...input} {...Restprops}></textarea> </FormControl>
}

export const Input = (props) => {
    const {input, meta,  ...Restprops} = props
    return <FormControl {...props} > <input {...input} {...Restprops} /> </FormControl>
}
export const CreateField = (placeHolder, name, validators, component, type) =>(
    <div> <Field type="text" placeholder={placeHolder}
           name={name} validate= {validators} type = {type}
           component = {component}/></div>
)