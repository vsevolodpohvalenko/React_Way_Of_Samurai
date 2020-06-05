import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile, MyProfile, getStatus, updateStatus, SavePhoto, SaveProfile} from '../../redux/profile_reducer'
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';
import { getProfileS, getStatusS, getMyIdS, getIsAuthS } from '../../redux/profile_selectors';

 

class ProfileContainer extends React.Component {
refreshProfile () {
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
  componentDidMount() {
this.refreshProfile()

}


    render() {
     return (
       <div>

         <Profile {...this.props.profile} SaveProfile = {this.props.SaveProfile} SavePhoto = {this.props.SavePhoto} isOwner = {!this.props.match.params.userId} profile= {this.props.profile} status = {this.props.status} updateStatus ={this.props.updateStatus} />
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
  profile: getProfileS(state),
  status: getStatusS(state),
  MyID: getMyIdS(state),
  isAuth:  getIsAuthS(state)
 })

 export default compose( withRouter, connect(mapStateToProps, {setUserProfile,MyProfile, SavePhoto, SaveProfile, getStatus, updateStatus }), WithAuthRedirect)(ProfileContainer)