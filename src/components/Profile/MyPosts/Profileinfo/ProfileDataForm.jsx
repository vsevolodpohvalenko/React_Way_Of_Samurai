import React from "react"
import s from "./Profileinfo.module.css";
import {CreateField, Input} from "../../../../FormControl/FormControls"
import { reduxForm } from "redux-form"


const ProfileDataForm = ({profile, handleSubmit, error}) => {

    return <form onSubmit={handleSubmit}>
            <div>
                <button className={s.edit}>Save</button>
            </div>

        {error && <div className={s.error}>
            {error}</div>}
            <b>Full Name: </b> {CreateField("Full Name", "fullName", [], Input )} <br/>
            <div className={s.main}>
                <b>Searching job:  </b> {CreateField("",
                "lookingForAJob", [], Input,  {type: 'checkbox'})}
            </div>
            <div className={s.main}>
                <b>My skills : </b> {CreateField("My Skills", "lookingForAJobDescription", [], Input )}
            </div>
            <div className={s.main}>
                <b>Some information about me :</b> {CreateField("About me", "aboutMe", [], Input )}
            </div>
            <b>Contacts: </b>
            <div>{Object.keys(profile.contacts).map((key, index) => {
                return <div key={index} className={s.contacts}>
                    <b>{key} : {CreateField(key, "contacts."+key, [], Input)} </b>
                </div>
            })}</div>
        </form>

}
export const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

