import React from "react"
import s from "./login.module.css"
import {reduxForm} from "redux-form"
import {Input, CreateField} from '../FormControl/FormControls'
import {required} from "../utils/validators"
import {connect} from "react-redux"
import { login} from "../redux/auth-reducer"

import {Redirect} from "react-router-dom"
import * as PropTypes from "prop-types";

class LoginForm extends React.Component {
    state ={
        isPasswordShown: false}
    togglePasswordVisability = () => {
        const {isPasswordShown} = this.state
        this.setState({isPasswordShown: !isPasswordShown})
    }
    render() {
        let {isPasswordShown} = this.state
        let {handleSubmit, error, captchaUrl} = this.props;
        return (
            <form className={s.appear} onSubmit={handleSubmit}>
                {CreateField("Email", "email", [required], Input)}
               <div className={s.field}>{CreateField("Password", "password",
                    [required], Input, {type: (isPasswordShown ? "text": "password"), id: "password"})}<img onClick={() =>{this.togglePasswordVisability()} } className={s.lock} src='https://icons-for-free.com/iconfiles/png/512/open+password+icon-1320183290851596683.png'/></div>
               <div className={s.center}> {CreateField(null, "rememberMe",
                    [], Input, {type: "checkbox", id: "check"})} <label className={s.checkLabel} htmlFor="check">Remember Me</label></div>
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && CreateField("Symbols from the captcha", "captcha", [required], Input)}
                {error && <div className={s.form_summary_error}>
                    {error}
                </div>
                }
                <div>
                    <button className={s.Log}>Login</button>
                </div>
            </form>
        )
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.any,
    error: PropTypes.any,
    captchaUrl: PropTypes.any
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

class Login extends React.Component {
    render() {
        debugger
        const onSubmit = (formData) => {
            this.props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
        }
        if (this.props.isAuth) {
            return <Redirect to={"/profile"}/>
        }
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}  captchaUrl={this.props.captchaUrl}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl

    }
}


export default connect(mapStateToProps, {login})(Login);