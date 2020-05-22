import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
let MapStateToProps = (state) =>{
return {isAuth: state.auth.isAuth}
}
export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {debugger
            if (!this.props.isAuth) {
                
                return <Redirect to= 'Login' />
            } 
            return <Component {...this.props}/>
        }
    }
    let ConnectWithAuthRedirectComponent = connect(MapStateToProps)(RedirectComponent)
    return ConnectWithAuthRedirectComponent
}
