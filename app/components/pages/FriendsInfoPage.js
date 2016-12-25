/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import chatClient from '../../network/ChatClient'
import eventDispatcher from '../../network/EventDispatcher'

export default class FriendsInfoPage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        const {auth, friends_info} = this.props;
        eventDispatcher.addListener('user_info', this.onUserInfo.bind(this));
        chatClient.user_info(auth, friends_info.username);
    }

    onUserInfo(data) {
        const {updateFriendsInfoFunc} = this.props;
        console.log(data);
        if (data.retcode == 0) {
            let user = data.result;
            updateFriendsInfoFunc(user);
        } else {
            console.log("on user info error code");
        }
    }

    render() {
        const {auth, friends_info} = this.props;
        return (
            <div className="main-account">
                <div className="account-user">
                    {friends_info.username}
                </div>

                <button onClick={this.onAddFriendsClick.bind(this)}>add</button>

            </div>
        )
    }

    onAddFriendsClick() {
        const {auth, friends_info} = this.props;
        chatClient.friends_add(auth, friends_info.username);
    }
}