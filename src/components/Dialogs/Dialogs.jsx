import React, {} from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import store from '../../redux/redux_store';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../preloader/FormControls';
import { required, maxLengthCreator } from '../../utils/validators';




let  maxLengthCreator10= maxLengthCreator(10)
const AddMessageForm = (props) => {
  return <form onSubmit = {props.handleSubmit} action="">
    <div><Field type= "text"  name = {"message"} component ={TextArea} validate={[required, maxLengthCreator10]} placeholder={"Text something..."}/></div>
    <button >Send</button>
  </form>
}

const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm)








const Dialogs = (props) => {
 let state = store.getState().dialogs   
let messagesElements = state.messages.map( m => <Message dispatch={props.dispatch} message={m.message}  messagea={m.messagea} key={m.id}/>);
let dialogsElements =state.dialog.map( d => <Dialog name={d.name} id={d.id} ava={d.Ava}  key={d.id}/>);

let AddNewMessage = (values) =>{
  props.AddTextCreator(values.message)
}

let Text= React.createRef()



    return<div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsElements}
         </div>
        <div className={s.messages}>
            <div className={s.cent}>
                {messagesElements}
            </div>
    <div className={s.item1}><AddMessageReduxForm onSubmit ={AddNewMessage}/> </div>
  </div>
        </div>
        }
export default Dialogs;