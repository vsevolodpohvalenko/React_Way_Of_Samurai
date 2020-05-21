import React from 'react'
import photoProfile from '../../assets/img/profile.jpg'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom';
import  * as  axios from 'axios'
import { usersAPI } from '../../api/api';
import { unfollow } from '../../redux/Users_reducer';

let Users = (props) => {
    
    let pagesCount = Math.ceil ((props.totalUsersCount/30) / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={s.item}>
    <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
                         onClick={(e) => {
                             props.onPageChanged(p);
                         }}>{p}  </span>
        })}
    </div>
    {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : photoProfile} />
                </NavLink> 
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=> id== u.id)} onClick={() => {
                                props.unfollow(u.id)
                                   
                            }}>Unfollow</button>
                            : <button  disabled={props.followingInProgress.some(id=> id== u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
        }
    </div>
}
 export default Users;
