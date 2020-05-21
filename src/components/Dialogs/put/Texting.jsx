import React, {Component } from 'react';
import s from './Texting.module.css'
import { updateNewMessageTextCreator, AddTextCreator } from '../../../redux/dialogs_reducer';
const MessageForm = (props) => {
let Text= React.createRef()

let ChangeText =( ) =>{
  let NewMessage = Text.current.value;
  props.updateNewMessage(NewMessage)
}

let addtext=( )=>{
  props.AddTextCreator()
  props.updateNewMessage(' ')
}


  return<div className ={s.item}>
  
    <div className={s.item}>
      <input onChange={ChangeText} value={props.newMessageChange} ref={Text} type="text"/>
    <button onClick={addtext} >Send</button></div>
  </div>
  
}

  export default MessageForm