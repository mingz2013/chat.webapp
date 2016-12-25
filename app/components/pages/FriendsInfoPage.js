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
        console.log(data);
    }

    render() {
        const {auth, friends_info} = this.props;
        return (
            <div className="main-account">
                <div className="account-user">
                    {friends_info.username}
                </div>

                <div className="account-group">
                    <div className="account-item">add</div>
                </div>

            </div>
        )
    }
}