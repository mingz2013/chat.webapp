/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'

import FriendsList from '../friends/FriendsList'
import chatClient from '../../network/ChatClient'
import eventDispatcher from '../../network/EventDispatcher'

export default class AddFriendsPage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        const { auth } = this.props;
        eventDispatcher.addListener('user_list', this.onUserList.bind(this));
        chatClient.user_list(auth)

    }

    onUserList(data) {
        const {updateUserListFunc} = this.props;
        console.log(data);
        if (data.retcode == 0) {
            let user_list = data.result;
            updateUserListFunc(user_list);
        } else {
            console.log("error on get all users");
        }
    }

    render() {
        const { user_list } = this.props;
        return (
            <div className="chat">
                <FriendsList friends_list={user_list}/>
            </div>
        )
    }
}