/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import chatClient from '../../network/ChatClient'
import eventDispatcher from '../../network/EventDispatcher'

export default class RegisterPage extends Component {

    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        console.log("register page did mount");
        eventDispatcher.addListener('register', this.onRegister.bind(this));
    }

    onRegister(data) {
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
        const {gotoLoginPage, gotoMainPage } = this.props;
        return (
            <div className="login">
                <h1 className="login-mane">Register</h1>
                <input type='text' ref='username' placeholder="用户名"/>
                <input type='text' ref='password' placeholder="密码"/>
                <input type='text' ref='password2' placeholder="重复密码"/>
                <a onClick={gotoLoginPage}>Login</a><br/>
                <span ref="errmsg"></span>
                <button
                    onClick={()=>this.handleClick()}>
                    Register
                </button>
            </div>
        )
    }

    handleClick() {
        const { auth, gotoLoginPage, gotoMainPage } = this.props;
        let username = this.refs.username.value.trim();
        let password = this.refs.password.value.trim();
        let password2 = this.refs.password2.value.trim();
        console.log(username);
        console.log(password);
        console.log(password2);
        if (!username) {
            this.refs.errmsg.innerHTML = "username is null";
            return;
        }
        if (!password) {
            this.refs.errmsg.innerHTML = "password is null";
            return;
        }
        if (!password2) {
            this.refs.errmsg.innerHTML = "password2 is null";
            return;
        }
        if (password != password2) {
            this.refs.errmsg.innerHTML = "password != password2";
            return;
        }
        chatClient.register(auth, username, password);
    }
}