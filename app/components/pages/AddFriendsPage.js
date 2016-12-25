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
        eventDispatcher.addListener('get_all_users', this.onGetAllUsers.bind(this));
        chatClient.get_all_users(auth)

    }

    onGetAllUsers(data) {
        const {updateAllUsersFunc} = this.props;
        console.log(data);
        if (data.retcode == 0) {
            let all_users = data.result;
            updateAllUsersFunc(all_users);
        } else {
            console.log("error on get all users");
        }
    }

    render() {
        const { all_users } = this.props;
        return (
            <div className="chat">
                <FriendsList friends_list={all_users}/>
            </div>
        )
    }
}