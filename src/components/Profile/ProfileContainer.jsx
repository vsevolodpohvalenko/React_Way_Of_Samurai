import React, {Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile, MyProfile, getStatus, updateStatus} from '../../redux/profile_reducer'
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

 

class ProfileContainer extends React.Component {

  componentDidMount() {
let userId = this.props.match.params.userId;
if (!userId){
  userId = this.props.MyID;
  if (!userId) {
    this.props.history.push("/Login")
  }
}
this.props.MyProfile(userId)
this.props.getStatus(userId)

}
   render() {
     return (
       <div>
         
         <Profile {...this.props.profile} profile= {this.props.profile} status = {this.props.status} updateStatus ={this.props.updateStatus} />
       </div>
     )
   }
 }
//  let mapStateToProps = (state) =>({
//   profile: state.ProfilePage.profile,
//   status: state.ProfilePage.status, 
//   MyID: state.auth.userId,
//   isAuth:  state.auth.isAuth
//  })
let mapStateToProps = (state) =>({
  profile: state.ProfilePage.profile,
  status: state.ProfilePage.status, 
  MyID: state.auth.userId,
  isAuth:  state.auth.isAuth
 })

 export default compose( withRouter, connect(mapStateToProps, {setUserProfile,MyProfile, getStatus, updateStatus }), WithAuthRedirect)(ProfileContainer)