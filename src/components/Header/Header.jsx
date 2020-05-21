import React, {Component } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) =>{
  let logImg = props.logImg
  return <div className={s.Header}> 
<img src="https://telegram.org/img/t_logo.png"/>
<div className={s.loginBlock}>
{props.isAuth ? <div> {props.login}  <button onClick = {props.logout}>Log out</button></div> : <NavLink to={'/login'} >Login</NavLink>}
</div>
</div>
}

export default Header;