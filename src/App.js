import React, {Component, Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import store from "./redux/redux_store";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';


import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './login/login';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import { compose } from 'redux';
import { connect } from 'react-redux';
import {initialiseApp} from "./AppReducer";
import Preloader from "./components/preloader/Preloader";
import {WithSuspense} from "./HOC/WithAuthSuspense";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/put/DialogsContainer'))
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'));





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
                    <div className='app-wrapper-content'>

                        <Route path="/" exact><Redirect to="/profile"/></Route>

                        <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                        <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <LoginPage/>}/>
                        <Route path='/todolist' render={() => <ToDoListContainer/>}/>

                    </div>
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