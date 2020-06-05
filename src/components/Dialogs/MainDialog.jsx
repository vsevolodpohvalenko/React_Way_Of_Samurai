import React from 'react'
import s from "./MainDialog.module.css"
import * as Yup from "yup"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { Speaker } from './Makers/Makers'
import { Conversation } from './Makers/Makers'

export const MainDialog = (props) => {
    debugger
   let NavId = props.match.params.id
    let OnSubmit =(messagea) => {
        props.AddText(NavId, messagea)}
    let Speakers = props.speakers.map(s => <Speaker photo={s.photo} SetId = {props.SetId}  stateId = {props.id}  name={s.name} id={s.id} />)
    let Message = props.messages[props.match.params.id-1].messages.map((m, index) => <Conversation AddText = {props.AddText} message={m.message}  messagea={m.messagea} id={index} />)
    return (<div className={s.wrapper}>
        
        <div className={s.Direct}>{Speakers}</div>
        <div className={s.Message} >{Message} </div>
        <div> <TypeAMessageForm OnSubmit ={ OnSubmit}/></div>
        
        </div>
    )
}








const initialValues = {
    message: ''
}

    const validationSchema = Yup.object({
        message: Yup.string().required('Required')

    })

const TypeAMessageForm = ({OnSubmit}) => {

    const onSubmit = (values)=>{
        OnSubmit(values.message)
    }

    return <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form >
            <Field name="message" component="input"  placeholder="Type a message..." type="text"/>
                <ErrorMessage name ="message"/>
            <button type="submit">Send</button>
        </Form>
    </Formik>}