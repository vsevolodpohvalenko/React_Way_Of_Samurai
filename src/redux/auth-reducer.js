import {AuthAPI, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case GET_CAPTCHA_URL :
      debugger
      return {...state, captchaUrl: action.payload.captcha}
    default:
      return state;
  }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}  });
export const getCaptchaUrlSuccess = (captcha) => ({type: GET_CAPTCHA_URL, payload : {captcha}})
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
  let response = await  AuthAPI.login(email, password, rememberMe,captcha )
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData())
        }
        else{
          if (response.data.resultCode === 10){
            dispatch(getCaptchaURL());
          }
          let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
          dispatch(stopSubmit("login", {_error: message}));
        }
}
export const getCaptchaURL = () => async (dispatch) => {
  let response = await SecurityAPI.getCaptcha()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export const logout = () => async (dispatch) => {
  let response = await AuthAPI.logout()
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
}
export default authReducer;