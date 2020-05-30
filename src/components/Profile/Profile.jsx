import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import Profileinfo from './MyPosts/Profileinfo/Profileinfo';


const Profile = (props) =>{

  return <div> 
  <div className={s.item}>
  <img  src="https://zurichguide.ru/wp-content/uploads/2016/08/Thun-castle-long.jpg"/>
  </div>
<Profileinfo  profile={props.profile}  SavePhoto = { props.SavePhoto} SaveProfile={props.SaveProfile} isOwner = {props.isOwner} status= {props.status} updateStatus ={props.updateStatus} />
<MyPostsContainer profile={props.profile} isOwner = {props.isOwner}  store={props.store} />
</div>
}
export default Profile;