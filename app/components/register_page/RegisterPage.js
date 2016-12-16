/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

export default class RegisterPage extends Component {
    render() {
        const {onLoginClick, onRegisterClick} = this.props;
        return (
            <div className="login">
                <h1 className="login-mane">Login</h1>
                <input type='text' ref='username' placeholder="用户名"/>
                <input type='text' ref='password' placeholder="密码"/>
                <input type='text' ref='password2' placeholder="重复密码"/>
                <a onClick={onLoginClick}>Login</a>
                <button
                    onClick={onRegisterClick(this.refs.username.value.trim(), this.refs.password.value.trim(), this.refs.password2.value.trim())}>
                    Register
                </button>
            </div>
        )
    }
}