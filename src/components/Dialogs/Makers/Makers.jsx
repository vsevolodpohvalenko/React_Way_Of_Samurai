import React from 'react'
import { NavLink } from 'react-router-dom';
import s from "../MainDialog.module.css"
import style from "./Makers.module.css"


export const Conversation = ({message, messagea, id}) =>{
    return <div key={id}>
        <p className={style.rightMessage}>{messagea}</p><p className={style.leftMessage}>{message}</p>
    </div>

    }
export const Speaker = ({photo, name, id}) =>{
    let requiredID = id
    let path = "/dialogs/" + requiredID

    return <NavLink to={path} className={s.Speaker} key={id}><img src={photo} alt=""/><p>{name}</p></NavLink>
    
}
    



