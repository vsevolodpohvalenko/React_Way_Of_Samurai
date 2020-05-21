import React, {Component } from 'react';
import s from './Profileinfo.module.css'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/profile_reducer';
import Preloader from '../../../preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus';

const Profileinfo = (props) =>{

if (props.profile === null){
  return <Preloader />
}

  return (
  <div>
<div className={s.main} ><img src={props.profile.photos.large} alt=""/>
<ProfileStatusWithHooks status= {props.status} updateStatus = {props.updateStatus} />
</div>
</div>)
}
export default Profileinfo;