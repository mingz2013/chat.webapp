/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import chatClient from '../network/Singleton'

export default class LoginPage extends Component {

    componentDidMount() {
        chatClient.bindOnLogin(this.onLogin.bind(this));
    }

    onLogin(data) {
        console.log(data);
        const { auth, gotoLoginPage, gotoMainPage, updateAuthFunc } = this.props;
        if (data.retcode == 0) {
            updateAuthFunc(data.result);
            gotoMainPage();
        } else {
            this.refs.errmsg.innerHTML = data.errmsg;
        }

    }

    render() {
        const {gotoLoginPage, gotoMainPage, gotoRegisterPage} = this.props;
        return (
            <div className="login">
                <h1 className="login-mane">Login</h1>
                <input type='text' ref='username' placeholder="用户名"/>
                <input type='text' ref='password' placeholder="密码"/>
                <a onClick={gotoRegisterPage}>Register</a>
                <button onClick={() => this.handleClick()}>
                    Login
                </button>
            </div>
        )
    }


    handleClick() {
        const { auth, gotoLoginPage, gotoMainPage } = this.props;
        let username = this.refs.username.value.trim();
        let password = this.refs.password.value.trim();
        console.log(username);
        console.log(password);
        if (!username) {
            this.refs.errmsg.innerHTML = "username is null";
            return;
        }
        if (!password) {
            this.refs.errmsg.innerHTML = "password is null";
            return;
        }

        chatClient.login(auth, username, password);
    }

}