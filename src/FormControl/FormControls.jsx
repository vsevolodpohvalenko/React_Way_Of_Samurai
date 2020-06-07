import React from "react"
import s from "./FormControls.module.css"
import {Field} from "redux-form";
const FormControls = ({input, meta:{touched, error}, children}) => {

    const field = input.name !== "password" && input.name !== "email" && input.name !== "rememberMe"

    const Indicate = error && touched
    return <div><div className={s.formControl + ' ' + (Indicate && s.error) + ' ' + (field && s.field)}>
        <div>{children}</div>
        </div>
        {Indicate && <span className={s.error}>{error}</span>}
        </div>
}
export  const TextArea = (props) =>{
    const {input, meta, ...Restprops} = props
    return <FormControls {...props} ><textarea {...input} {...Restprops}/></FormControls>
}
export const Input = (props) => {
    const {input, meta, ...Restprops} = props
    return  <FormControls  {...props}><input type="text" {...input} {...Restprops}/></FormControls >
}
export  const CreateField = (placeHolder, name, validators, component, props ={}) =>(
    <div ><Field placeholder={placeHolder} name = {name}
                validate={validators} component={component} {...props}/></div>
)
