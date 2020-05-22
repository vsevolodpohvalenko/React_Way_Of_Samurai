import {usersAPI} from "../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOOGLE_IS_FETCHING = "TOOGLE-IS-FETCHING"
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE-IS-FOLLOWING-PROGRESS"

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 21,
    currentPage: 8,
    isFetching: true,
    followingInProgress: []
}
const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })

            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [state.followingInProgress.filter(id => id != action.userId)]
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})
export const ToogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})
export const ToogleFollowingProgress = (isFetching, userId) => ({
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(ToogleIsFetching(true))
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(ToogleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}




export const follow = (id) => {
    return async (dispatch) => {
        dispatch(ToogleFollowingProgress(true, id))
        let data = await usersAPI.follow(id)
        if (data.data.resultCode === 0) {
            dispatch(followSuccess(id));
        }
        dispatch(ToogleFollowingProgress(false, id))
    }
}

export const unfollow = (id) => {
    return async (dispatch) => {
        dispatch(ToogleFollowingProgress(true, id))
       let data = await usersAPI.unfollow(id)
       debugger
            if (data.data.resultCode === 0) {
                dispatch(unfollowSuccess(id));
            }
            dispatch(ToogleFollowingProgress(false, id))
    }
}

export default UsersReducer;