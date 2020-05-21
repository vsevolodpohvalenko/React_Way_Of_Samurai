import React, {Component } from 'react';
import  * as  axios from 'axios'
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData, logout} from '../../redux/auth-reducer'
class HeaderContainer extends React.Component {

  render( ){
return <Header {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isAuthImg: state.auth.isAuthImg,
  login: state.auth.login,
  logImg: state.auth.logImg,
  userId: state.auth.userId
});
export default connect(mapStateToProps, {setAuthUserData, logout} ) (HeaderContainer);