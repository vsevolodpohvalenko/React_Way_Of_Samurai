import React, {Component } from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import Profileinfo from './MyPosts/Profileinfo/Profileinfo';
import {updateStatus} from "../../redux/profile_reducer";

const Profile = (props) =>{

  return <div> 
  <div>
  <img src="https://zurichguide.ru/wp-content/uploads/2016/08/Thun-castle-long.jpg"/>
  </div>
<Profileinfo  profile={props.profile} status= {props.status} updateStatus ={props.updateStatus} />
<MyPostsContainer profile={props.profile}  store={props.store} />
</div>
}
export default Profile;