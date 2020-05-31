import React from 'react';
import s from "./Profileinfo/Profileinfo.module.css"
import Post from './Post/Post';
import store from '../../../redux/redux_store';
import Preloader from '../../preloader/Preloader';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { TextArea } from '../../preloader/FormControls';
const MyPosts = ({profile, addPost}) =>{
debugger
    let AddPost = (values) => {
  addPost(values.postMessage)
}
    if (profile === null){
    return <Preloader/>
  }
    let state = store.getState().ProfilePage
    let postElements = state.posts.map( p => <Post key = {p.id} message = {p.message} likeCount ={p.likeCount} Ava={p.Ava} key={p.id}/>)

  return <div className={s.item}>


  <h2 className={s.item} >My Post</h2>
  <AddPostFormReducer onSubmit ={AddPost}/>
  <div className={s.posts}>
                { postElements }
            </div>
  </div>
}




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