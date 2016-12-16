/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import { changePage } from '../../actions/index'
import { PAGE_CHAT, PAGE_LOGIN, PAGE_MAIN, PAGE_REGISTER } from '../../constants/PageIndex'


export default class LoginPage extends Component {
    render() {
        return (
            <div className="login">
                <h1 className="login-mane">Login</h1>
                <input type='text' ref='username' placeholder="用户名"/>
                <input type='text' ref='password' placeholder="密码"/>
                <a onClick={(e) => store.dispatch(changePage(PAGE_REGISTER))}>Register</a>
                <button onClick={(e) => this.handleClick(e)}>
                    Login
                </button>
            </div>
        )
    }

    handleClick(e) {
        const username = this.refs.username;
        const username_text = username.value.trim();
        const password = this.refs.password;
        const password_text = password.value.trim();
        //this.props.onLoginClick(username_text, password_text);
        store.dispatch(changePage(PAGE_MAIN));
        //username.value = ''
    }
}