import React from "react"
import s from "./login.module.css"
import { reduxForm, Field } from "redux-form"
import {Input, CreateField} from '../components/preloader/FormControls'
import { required } from "../utils/validators"
import { connect } from "react-redux"
import {login} from "../redux/auth-reducer"
import { Redirect } from "react-router-dom"
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("Email", "email", [required], Input)}
            {CreateField("Password", "password", [required], Input, {type: "password"})}
            {CreateField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
            {captchaUrl && <img  src={captchaUrl} />}
            {captchaUrl &&  CreateField("symbols from captcha", "captcha", [required], Input)}
            {error && <div className={s.form_summary_error}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
    
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login =(props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
     if (props.isAuth) {
         return <Redirect to={"/profile"}/>
     }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl = {props.captchaUrl}/>
    </div>
}
const mapStateToProps =(state) =>{
   return {
       isAuth: state.auth.isAuth,
       captchaUrl: state.auth.captchaUrl
   }

}
export default connect(mapStateToProps, {login})(Login);