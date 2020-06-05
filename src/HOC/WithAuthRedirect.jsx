import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Preloader from "../components/preloader/Preloader";
let MapStateToProps = (state) =>{
return {isAuth: state.auth.isAuth}
}
export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) {

                return <Redirect to= 'Login' />
            }
            return <Component {...this.props}/>
        }
    }
    let ConnectWithAuthRedirectComponent = connect(MapStateToProps)(RedirectComponent)
    return ConnectWithAuthRedirectComponent
}
