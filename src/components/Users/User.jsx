import React from 'react'
import photoProfile from '../../assets/img/profile.jpg'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom';


let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div className={s.item}>
            <span>
                <div>
                <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : photoProfile} />
                </NavLink> 
                    </div>
                    <div>
                        {user.followed
                            ? <button className={s.unfollow} disabled={followingInProgress.some(id=> id== user.id)} onClick={() => {
                                unfollow(user.id)
                                   
                            }}>Unfollow</button>
                            : <button  className={s.follow} disabled={followingInProgress.some(id=> id== user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
        
</div>
}
 export default User;
