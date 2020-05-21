import React, {} from 'react';
import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';
const Dialog = (props) =>{
    let path ="/dialogs/" + props.id
    return(<div className={s.dialog + ' '+ s.active}>
        
        <div className={s.item}><div><img src={props.ava} alt=""/></div>
        <div><p><NavLink className={s.lol} to={path}>{
        props.name}</NavLink></p>      </div>
        </div> 
        </div>
    )
}
export default Dialog;