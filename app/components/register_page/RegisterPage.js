/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import { changePage } from '../../actions/index'
import { PAGE_CHAT, PAGE_LOGIN, PAGE_MAIN, PAGE_REGISTER } from '../../constants/PageIndex'

export default class RegisterPage extends Component {
    render() {
        const { dispatch } = this.props;

        return (
            <div className="login">
                <h1 className="login-mane">Login</h1>
                <input type='text' ref='username' placeholder="用户名"/>
                <input type='text' ref='password' placeholder="密码"/>
                <input type='text' ref='password2' placeholder="重复密码"/>
                <a onClick={(e) => dispatch(changePage(PAGE_LOGIN))}>Login</a>
                <button onClick={(e) => this.handleClick(e)}>
                    Register
                </button>
            </div>
        )
    }

    handleClick(e) {
        const username = this.refs.username;
        const username_text = username.value.trim();
        const password = this.refs.password;
        const password_text = password.value.trim();
        const password2 = this.refs.password2;
        const password2_text = password2.value.trim();
        //this.props.onRegisterClick(username_text, password_text, password2_text);
        this.props.dispatch(changePage(PAGE_MAIN));
        //username.value = ''
    }
}