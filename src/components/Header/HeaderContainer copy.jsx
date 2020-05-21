import React, {Component } from 'react';
import  * as  axios from 'axios'
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUsersData, setAuthUsersPhoto, logout} from '../../redux/auth-reducer'
class HeaderContainer extends React.Component {
  componentDidMount() {
    debugger 
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
          if (response.data.resultCode === 0){
            let {id, email, login} = response.data.data;
            this.props.setAuthUsersData(id, email, login);

          }

        })
        if (this.props.userId != null){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response => {
          
            let logImg = response.data.items.photos.large
            this.props.setAuthUsersPhoto(logImg);

        })}

}
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
export default connect(mapStateToProps, {setAuthUsersData, setAuthUsersPhoto, logout} ) (HeaderContainer);