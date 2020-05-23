import React from 'react'
import photoProfile from '../../assets/img/profile.jpg'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom';
import Pagenator from '../Pagenator/Pagenator';
import User from './User';

let Users = ({totalUsersCount, currentPage, pageSize, onPageChanged, users, ...props}) => {
    return <div className={s.item}>
    <Pagenator totalUsersCount = {totalUsersCount} currentPage = {currentPage} pageSize = {pageSize} onPageChanged = {onPageChanged} />
<div>
    {
        users.map(u => <User key={u.id} user = {u}
         followingInProgress = {props.followingInProgress} 
         unfollow = {props.unfollow}
          follow = {props.follow}/>
        )}
</div>
</div>
}
 export default Users;
