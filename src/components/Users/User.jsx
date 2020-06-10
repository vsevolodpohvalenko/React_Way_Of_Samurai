import React from 'react'
import photoProfile from '../../assets/img/profile.jpg'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom';


let User = ({user, followingInProgress, unfollow, follow}) => {

    return <div className={s.item}>
           
           <div className={s.person}> <span>
                <div className={s.person}>
                    <div>
                <NavLink to={'/profile/' + user.id}>
                <div className={s.Box}> <img  src={user.photos.small != null ? user.photos.small : photoProfile} /></div>
                </NavLink> 
                    </div>
                    <span className={s.person}>
                        <div className={s.Box}>{user.name}</div>
                        <div className={s.Box}>{user.status || "Status"}</div>
                    </span>
                    <div>
                        {user.followed
                            ? <div className={s.Box}><button  className={s.unfollow} disabled={followingInProgress.some(id=> id== user.id)} onClick={() => {
                                unfollow(user.id)
                                   
                            }}>Unfollow</button></div>
                            : <div className={s.Box}><button  className={s.follow} disabled={followingInProgress.some(id=> id== user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button></div>}

                    </div>
                    </div>
                </span>
                <span>
                   
                </span>
                </div>
</div>
}
 export default User;
