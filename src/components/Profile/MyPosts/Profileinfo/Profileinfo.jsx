 import React, {useState} from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../../preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import photoProfile from '../../../../assets/img/ProfilePhoto.jpeg'
import {ProfileDataFormReduxForm} from "./ProfileDataForm";

const Profileinfo = ({profile, updateStatus, status, isOwner, SavePhoto, SaveProfile}) => {

  let [editMode, setEditMode] = useState(false);

    const Contact = ({contactTitle, contactValue}) => {
        return <div><b>{contactTitle}:</b>{contactValue}</div>
    }
    if (profile === null) {
        return <Preloader/>
    }
    const onMainPhoto = (e) => {
        debugger
        if (e.target.files.length) {
            SavePhoto(e.target.files[0])
        }
    }

  const ProfileData = ({profile, isOwner, goToEditMode}) => {
      debugger
    return <div>
      {isOwner && <div>
        <button onClick={goToEditMode}>Edit</button>
      </div>}
      {profile.fullName} <br/>
      <div className={s.main}>
        <b>Some information about me : </b> {profile.aboutMe || "I'm realy modest person"}
      </div>
      <div className={s.main}>
        <b>My skills : </b> {profile.lookingForAJob || "false"}
      </div>
      <div className={s.main}>
        <b>Searching job : </b> {profile.lookingForAJobDescription || "I'm just student, or very lazy"}
      </div>
      <b>Contacts: </b>
      <div className={s.main}>

        <div>{Object.keys(profile.contacts).map(key => {
          return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
      </div>
    </div>

  }

  const onSubmit = (formData) =>{
       SaveProfile(formData).then(() => {
    setEditMode(false)})
  }
    return (
        <div>
            <div className={s.main}><img src={profile.photos.large != null ? profile.photos.large : photoProfile}
                                         alt=""/>

                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
            {isOwner && <input type={"file"} onChange={onMainPhoto}/>}

          { editMode
              ? <ProfileDataFormReduxForm initialValues={profile} profile ={profile} onSubmit ={onSubmit}/>
              : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }

        </div>)

}
export default Profileinfo;