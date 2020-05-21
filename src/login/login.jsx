import React from "react"
import s from "./login.module.css"
import { reduxForm, Field } from "redux-form"
import {CreateField, Input} from "../components/preloader/FormControls"
import { required } from "../utils/validators"
import { connect } from "react-redux"
import {login} from "../redux/auth-reducer"
import { Redirect } from "react-router-dom"
const LoginForm =({handleSubmit, error}) =>{
    
    return  <form onSubmit={handleSubmit} action="">
        <div>{CreateField("Email", "mail")}</div>
        <div><Field type="text" placeholder={"Password"} type={"password"} validate = {[required]} name={"password"} component = {Input} /></div>
        <div><Field component = {Input} name={"rememberMe"} type= {"checkbox"}/> rememder me</div>
 {error && <div className={s.form_summary_error}>{error}</div>}
        <div><button>Login</button></div>
    </form>

}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login =(props) => {
    const OnSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={OnSubmit}/>
    </div>
}
const mapStateToProps =(state) =>{
   return { isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps, {login})(Login);