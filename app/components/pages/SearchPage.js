/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'

import UserItem from '../common/UserItem'
import chatClient from '../../network/ChatClient'
import eventDispatcher from '../../network/EventDispatcher'

export default class SearchPage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        const { auth } = this.props;
        eventDispatcher.addListener('user_list', this.onUserList.bind(this));
        chatClient.user_list(auth);
    }

    onUserList(data) {
        console.log(data);
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
        const { user_list, gotoProfilePage, gotoMainPage } = this.props;
        return (
            <div>
                <div>
                    <button onClick={this.onContactsClick.bind(this)}>Contacts</button>
                    <span>Find</span>
                </div>
                <div className="chat">
                    {
                        user_list.map((user, index) =>
                            <UserItem user={user} key={index} gotoProfilePage={gotoProfilePage}/>
                        )
                    }
                </div>
            </div>
        )
    }

    onContactsClick() {
        const {gotoMainPage} = this.props;
        gotoMainPage();
    }
}