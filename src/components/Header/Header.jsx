import React, {Component } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) =>{
  return <div className={s.Header}> 
<img src="https://telegram.org/img/t_logo.png"/>
<div className={s.loginBlock}>
{props.isAuth ? <div> {props.login}  <button className={s.hbtn} onClick = {props.logout}>Log out</button></div> : <NavLink to={'/login'} >Login</NavLink>}
</div>
</div>
}

export default Header;