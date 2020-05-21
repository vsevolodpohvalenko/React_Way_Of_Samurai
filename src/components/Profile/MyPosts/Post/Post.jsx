import React, {Component } from 'react';
import s from './Post.module.css'
const Post = (props) =>{
  return <div className={s.item}>
<div className={s.border}>
<img src={props.Ava} alt=""/>
 {props.message}<img  />
 <div>
 
<span > {props.likeCount}<a href="£" className={s.likeform}>likes</a></span>

 </div>
</div>
</div>
}
export default Post;