/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import chatClient from '../../network/ChatClient'
import eventDispatcher from '../../network/EventDispatcher'

export default class ProfilePage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        const {auth, user_info} = this.props;
        eventDispatcher.addListener('user_info', this.onUserInfo.bind(this));
        chatClient.user_info(auth, user_info.username);
    }

    onUserInfo(data) {
        const {updateUserInfoFunc} = this.props;
        console.log(data);
        if (data.retcode == 0) {
            let user = data.result;
            updateUserInfoFunc(user);
        } else {
            console.log("on user info error code");
        }
    }

    render() {
        const {auth, user_info, gotoMainPage} = this.props;
        return (
            <div className="main-account">
                <div className="message-title">
                    <button className="pl" onClick={this.onBackClick.bind(this)}>Back</button>
                    <span>Profile</span>
                    <button className="pr" onClick={this.onAddFriendsClick.bind(this)}>Add</button>
                </div>
                <div>
                    <div className="account-user">
                        <img className="fl" src="" alt=""/>
                        <div className="account-user-title fl">{user_info.username}</div>
                    </div>
                    <div>

                        <div className="account-group">
                            <div className="account-item"></div>
                            <div className="account-item"></div>
                        </div>
                        <div className="account-group">
                            <div className="account-item"></div>
                            <div className="account-item"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onAddFriendsClick() {
        const {auth, user_info, gotoVerifyPage} = this.props;
        gotoVerifyPage();
    }

    onBackClick() {
        const {auth, user_info, gotoMainPage} = this.props;
        gotoMainPage();
    }

}