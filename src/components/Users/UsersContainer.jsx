import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../preloader/Preloader';
import { compose } from 'redux';
import {
    follow,
    setCurrentPage,
    unfollow, ToogleFollowingProgress, requestUsers
} from '../../redux/Users_reducer';
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    getUsers
} from '../../redux/Users_selectors';



class UsersContainer extends React.Component {
    componentDidMount() {
    const {requestUsers, currentPage, pageSize } = this.props
    requestUsers(currentPage, pageSize)}
    onPageChanged = (pageNumber) => {
    const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
        this.props.setCurrentPage(pageNumber)
    }
    render(){
        return <>
         { this.props.isFetching ? <Preloader/> : null }
         <Users 
        totalUsersCount = {this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}

         /></>
}
    }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
    follow, unfollow,
   setCurrentPage, 
     ToogleFollowingProgress,
        requestUsers}))(UsersContainer)
