import React, {Component } from 'react';
import s from './Profileinfo.module.css'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/profile_reducer';
import Preloader from '../../../preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus';
import photoProfile from '../../../../assets/img/ProfilePhoto.jpeg'
const Profileinfo = ({profile, updateStatus, status}) =>{

if (profile === null){
  return <Preloader />
}

  return (
  <div>
<div className={s.main} ><img src={profile.photos.large != null ? profile.photos.large : photoProfile} alt=""/>
<ProfileStatusWithHooks status= {status} updateStatus = {updateStatus} />
</div>
</div>)
}
export default Profileinfo;