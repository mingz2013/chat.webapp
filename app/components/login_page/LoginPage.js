/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

export default class LoginPage extends Component {
    render() {
        const {onLoginClick, onRegisterClick} = this.props;
        return (
            <div className="login">
                <h1 className="login-mane">Login</h1>
                <input type='text' ref='username' placeholder="用户名"/>
                <input type='text' ref='password' placeholder="密码"/>
                <a onClick={onRegisterClick}>Register</a>
                <button onClick={onLoginClick(this.refs.username.value.trim(), this.refs.password.value.trim())}>
                    Login
                </button>
            </div>
        )
    }
}