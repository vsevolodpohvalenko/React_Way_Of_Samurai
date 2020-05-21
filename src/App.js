import React, {Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { Route, withRouter} from 'react-router-dom';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/put/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './login/login';

import { compose } from 'redux';
import { connect } from 'react-redux';
import {initializeApp} from "./AppReducer";
import Preloader from "./components/preloader/Preloader";



class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (this.props.initialized) {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    {/*<Profile/>*/}
                    <div className='app-wrapper-content'>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <LoginPage/>}/>
                        <Route path='/music' render={() => <Music/>}/>

                    </div>
                </div>
            );

        }
        return (<Preloader/>)
    }
}
const mapStateToProps = (state) => {
    debugger
    return {

        initialized : state.App.initialized
    }
}

export default compose( withRouter, connect( mapStateToProps , {initializeApp}))(App)
