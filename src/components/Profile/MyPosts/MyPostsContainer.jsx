import React, {Component } from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile_reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps= (state) => {

  return {
    posts: state.ProfilePage.posts,
    newPostText: state.ProfilePage.newPostText,
    profile:state.ProfilePage.profile
    
  }
}

let mapDispatchToProps = (dispatch) => {
 return {
   addPost: (postMessageBody) =>{
    dispatch(addPostActionCreator(postMessageBody))
    },
    updateNewPostText: (text) =>{
      dispatch(updateNewPostTextActionCreator(text));
    }
    }

}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostContainer;