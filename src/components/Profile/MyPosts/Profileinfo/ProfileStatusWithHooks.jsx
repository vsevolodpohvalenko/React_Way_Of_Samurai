import React from "react"
import { useState } from "react";


const ProfileStatusWithHooks = (props) =>{
let [editMode, setEditMode] = useState({editMode: false})
let [ status, setStatus] = useState({ status: props.status})
let activateEditMode = () =>{
    setEditMode(true)
}
let diactivateEditMode = () =>{
    setEditMode(false)
    props.updateStatus(status);
}
const onStatusChange = () => {
    setStatus(e.currentTarget.value)
}
return <>
    <div>
        {!editMode && 
        <span value = {status} onDoubleClick = {activateEditMode} onChange = {onStatusChange} onBlur = {diactivateEditMode} > {props.status || 'HI'} </span>}
    </div>
    <div>
    {editMode &&
    <input  autoFocus={true} />}
    </div>
</>}
export default ProfileStatusWithHooks;