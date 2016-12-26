/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import chatClient from '../../network/ChatClient'
import eventDispatcher from '../../network/EventDispatcher'

export default class UserInfoPage extends Component {
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
        const {auth, user_info} = this.props;
        return (
            <div className="main-account">
                <div className="account-user">
                    {user_info.username}
                </div>

                <button onClick={this.onAddFriendsClick.bind(this)}>add</button>

            </div>
        )
    }

    onAddFriendsClick() {
        const {auth, user_info} = this.props;
        chatClient.friends_add(auth, user_info.username);
    }
}