import React, {} from 'react';
import s from './Friend.module.css'
const FriendMAKE = (props) => { 
    return(<div>
        <div className={s.item}>
    <div><img src={props.foto} alt=""/><div className={s.item} >{props.name}</div></div>
    </div>
    </div>

    ) 
}
const Friend = (props) => { 
    let Friends = props.Frie.map(f=> <FriendMAKE name={f.name} foto={f.foto}/>)
        return(<div> 
        <h2>Friends</h2>
           <div className={s.item}>
           {Friends}
           </div>
        </div>
    
        ) 
    }
export default Friend;