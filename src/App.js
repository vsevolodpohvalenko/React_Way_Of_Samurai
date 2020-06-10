import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import store from "./redux/redux_store";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';


import HeaderContainer from './components/Header/HeaderContainer';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import { compose } from 'redux';
import { connect } from 'react-redux';
import {initialiseApp} from "./AppReducer";
import Preloader from "./components/preloader/Preloader";
import {WithSuspense} from "./HOC/WithAuthSuspense";




const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'));
const LoginPage = React.lazy(() => import('./login/login'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const ToDoListContainer = React.lazy(() => import('./components/ToDoList/ToDoListContainer'))


class App extends Component {
    componentDidMount() {
        this.props.initialiseApp()
    }
    render() {
        if (this.props.initialised) {
            return (

                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    {/*<Profile/>*/}
                    <Switch>
                        <React.Fragment>
                    <div className='app-wrapper-content'>

                        <Route path="/" exact><Redirect to="/profile"/></Route>

                        <Route exact path="/dialogs/:id?" render={WithSuspense(DialogsContainer)}/>
                        <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)}/>
                        <Route path="/users" render={WithSuspense(UsersContainer)}/>
                        <Route path="/login" render={WithSuspense(LoginPage)}/>
                        <Route path='/todolist' render={WithSuspense(ToDoListContainer)}/>
                        {/* <Route path='/form' render={WithSuspense(TypeAMessageForm)}/> */}

                    </div>
                        </React.Fragment>
                    </Switch>
                </div>

            );

        }

        return (<Preloader/>)
    }
}
const mapStateToProps = (state) => {

    return {

        initialised : state.App.initialised
    }
}
export let AppContainer = compose( withRouter, connect( mapStateToProps , {initialiseApp}))(App)

const SamuraiJSApp = (props) =>{
return  <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>;
}
export default SamuraiJSApp;