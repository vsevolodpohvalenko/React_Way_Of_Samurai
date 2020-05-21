import React, {} from 'react';
import s from "./Profileinfo/Profileinfo.module.css"
import Post from './Post/Post';
import store from '../../../redux/redux_store';
import Preloader from '../../preloader/Preloader';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { TextArea } from '../../preloader/FormControls';
const MyPosts = React.memo((props) =>{
let AddPost = (values) => {
  props.addPost(values.postMessage)
}
  if (props.profile === null){
    return <Preloader/>
  }

  let state = store.getState().ProfilePage

  let postElements = state.posts.map( p => <Post message = {p.message} likeCount ={p.likeCount} Ava={p.Ava} key={p.id}/>)

return <div className={s.item}>
  <div className={s.main} >
  {props.profile.fullName} <br/>
  {props.profile.aboutMe} <br/>
  {props.profile.lookingForAJobDescription} <br/>
  {props.profile.contacts.instagram}<br/>
  {props.profile.contacts.github}<br/>


  </div>
  <h2 className={s.item} >My Post</h2>
  <AddPostFormReducer onSubmit ={AddPost}/>
  <div className={s.posts}>
                { postElements }
            </div>
  </div>
})
let maxLengthCreator10 = maxLengthCreator(10)
const AddPostForm = (props) =>{
 return <form action="" onSubmit ={props.handleSubmit}>
    <Field className={s.tex} component ={TextArea} placeholder={"Share your impression"} validate={[required, maxLengthCreator10]} name = {"postMessage"}   type="text"/>
    <button  className={s.bcol}  >Send</button>
  </form>
}

const AddPostFormReducer = reduxForm({
  form : "post"
})(AddPostForm)
export default MyPosts;