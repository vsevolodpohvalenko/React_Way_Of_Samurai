import React from 'react'
import s from './Users.module.css'
import Pagenator from '../Pagenator/Pagenator';
import User from './User';

let Users = ({totalUsersCount, currentPage, pageSize, onPageChanged, users, ...props}) => {
    return <div className={s.item}>
    <Pagenator totalItemsCount = {totalUsersCount} currentPage = {currentPage} pageSize = {pageSize} onPageChanged = {onPageChanged} />
<div >
    {
        users.map(u => <User className={s.person} key={u.id} user = {u}
         followingInProgress = {props.followingInProgress} 
         unfollow = {props.unfollow}
          follow = {props.follow}/>
        )}
</div>
</div>
}
 export default Users;
