import React, {Component } from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friends/Friends';
import store from '../../redux/redux_store';

const Navbar = (props) =>{
  let state = store.getState().sideBar
  let SidebarElements= state.SideBar.map(s => <NavbarStrlol sidename={s.name} link={s.to} key={s.id}/>)
  return <nav className={s.nav}>
    {SidebarElements}
    <Friend Frie={state.friend}/>
  </nav>

}


const NavbarStrlol = (props) => {
  return <div className={s.item}><NavLink to={props.link} activeClassName={s.activeLink}>{props.sidename}</NavLink></div>

}


export default Navbar;