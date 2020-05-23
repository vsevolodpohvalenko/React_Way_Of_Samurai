import React from 'react' 
import s from './FormControls.module.css'
import {Field} from "redux-form";
import {required} from "../../utils/validators";
const FormControl = ({input, meta: {touched, error},  children }) => {
    const indicate = error && touched
    return <div className ={s.formControl + ' ' + (indicate ? s.error : "")}>
        <div>{children}</div>
    {indicate && <span>{error}</span>}
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
export const CreateField = (placeHolder, name, validators, component, props = {}, text = '' ) =>(
    <div> <Field  placeholder={placeHolder}
           name={name} validate= {validators} 
           {...props}

           component = {component}/>
           {text}</div>
)