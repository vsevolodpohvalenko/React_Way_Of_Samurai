import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'

let initialState = {
    posts: [
        {Ava: "https://imgur.com/I80W1Q0.png", message: "Hi! How are you", likeCount: "1,128 "},
        {
            Ava: "https://image.flaticon.com/icons/png/512/186/premium/186313.png",
            message: "It's my first post, lol;)",
            likeCount: "193 "
        },
        {Ava: "https://imgur.com/I80W1Q0.png", message: "Wow", likeCount: "1,328 "},
        {
            Ava: "https://image.flaticon.com/icons/png/512/186/premium/186313.png",
            message: "What is the weather today?",
            likeCount: "393 "
        },
        {Ava: "https://imgur.com/I80W1Q0.png", message: "Nice day", likeCount: "2,428 "},
        {
            Ava: "https://image.flaticon.com/icons/png/512/186/premium/186313.png",
            message: "I have done it",
            likeCount: "6,893 "
        }],

    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""

};

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                Ava: "https://imgur.com/I80W1Q0.png",
                message: action.postMessageBody,
                likeCount: "0 "
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: " "
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                posts: [...state.posts],
                newPostText: action.NewText
            }
        }
        case  DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (postMessageBody) => ({type: ADD_POST, postMessageBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, NewText: text})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const MyProfile = (id) => {
    return (dispatch) => {

        profileAPI.getProfile(id).then(data => {
            dispatch(setUserProfile(data))
        });
    }
}
export const getStatus = (id) => async (dispatch) => {
    let response = await profileAPI.getStatus(id)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    debugger
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export default ProfileReducer;