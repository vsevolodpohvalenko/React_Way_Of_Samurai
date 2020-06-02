import React from "react"
import s from "./FormControls.module.css"
import {Field} from "redux-form";

const FormControls = ({input, meta:{touched, error}, children}) => {
    const field = input.name !== "rememberMe"
    const Indicate = error && touched
    return <div className={s.formControl + ' ' + (Indicate && s.error) + ' ' + (field && s.filed)}>
        <div>{children}</div>
        {Indicate && <span>{error}</span>}
        </div>
}
export  const TextArea = (props) =>{
    const {input, meta, ...Restprops} = props
    return <FormControls {...props} ><textarea {...input} {...Restprops}/></FormControls>
}
export const Input = (props) => {
    const {input, meta, ...Restprops} = props
    return  <FormControls  {...props}><input {...input} {...Restprops}/></FormControls >
}
export  const CreateField = (placeHolder, name, validators, component, props ={}, text= "") =>(
    <div ><Field placeholder={placeHolder} name = {name}
                validate={validators} component={component} {...props}/><span>{text}</span></div>
)
