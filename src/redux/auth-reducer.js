import {AuthAPI, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const CAPTCHA_URL = 'CAPTCHA_URL'
const CHANGE_TYPE = 'CHANGE-TYPE'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl : null,
  type : 'password'

};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    case CHANGE_TYPE :
      return {...state, type: action.Type}

    case CAPTCHA_URL :
      return {...state,...action.payload }

    default:
      return state;
  }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}  });
const TypeChangeSuccess = (Type) => ({type: CHANGE_TYPE, Type})
const getCaptchaUrlSuccess = (captchaUrl) => ({type : CAPTCHA_URL, payload: {captchaUrl}})

export const getAuthUserData = () => (dispatch) => {
  AuthAPI.Auth()
  return AuthAPI.Auth()
  .then(response => {
    if (response.data.resultCode === 0) {
      let {id, login, email} = response.data.data;
          dispatch(setAuthUserData(id, email, login, true));
      }
    });
}
export const login = (email, password, rememberMe, captcha ) => async (dispatch) => {
  debugger
  let response = await  AuthAPI.login(email, password, rememberMe , captcha)
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData())
        }
        else{
          if (response.data.resultCode === 10) {
            dispatch(GetCaptchaUrl())
          }
          let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
          dispatch(stopSubmit("login", {_error: message}));
        }
}


export const logout = () => async (dispatch) => {
  debugger
  let response = await AuthAPI.logout()
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
}
export const ChangeType = (Type) => (dispatch) =>{

  dispatch(TypeChangeSuccess(Type))
}
export const GetCaptchaUrl = () => async (dispatch) => {
  let response= await SecurityAPI.captchaUrl()
  dispatch(getCaptchaUrlSuccess(response.data.url))
}
export default authReducer;