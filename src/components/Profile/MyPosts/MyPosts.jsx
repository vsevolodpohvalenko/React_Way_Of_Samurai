import React from 'react';
import s from "./Profileinfo/Profileinfo.module.css"
import Post from './Post/Post';
import store from '../../../redux/redux_store';
import Preloader from '../../preloader/Preloader';
import {  reduxForm } from 'redux-form';
import {AddPostForm} from "./MyPostsForm"
const MyPosts = ({profile, addPost}) =>{
  const AddPostFormReducer = reduxForm({
    form : "post"
  })(AddPostForm)

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


export default MyPosts;