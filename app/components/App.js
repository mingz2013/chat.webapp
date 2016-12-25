/**
 * Created by zhaojm on 16/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import LoginPage from '../containers/pages/LoginPage'
import RegisterPage from '../containers/pages/RegisterPage'
import MainPage from '../containers/pages/MainPage'
import ChatPage from '../containers/pages/ChatPage'
import LoadingPage from '../containers/pages/LoadingPage'
import AddFriendsPage from '../containers/pages/AddFriendsPage'
import FriendsInfoPage from '../containers/pages/FriendsInfoPage'

import { PAGE_CHAT, PAGE_LOGIN, PAGE_MAIN, PAGE_REGISTER, PAGE_LOADING, PAGE_ADDFRIENDS, PAGE_FRIENDSINFO } from '../constants/PageIndex'


import chatClient from '../network/ChatClient'
import eventDispatcher from '../network/EventDispatcher'

export default class App extends Component {

    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        const { auth } = this.props;

        // 在这里注册heartbeat的message type事件, 要用app的dispatch 去更新state
        eventDispatcher.addListener('chat', this.onChat.bind(this));

    }

    onChat(data) {
        console.log(data);
    }









    render() {
        const { page_index } = this.props;

        return (
            <div className="height-init">
                {
                    page_index == PAGE_LOADING ? (
                        <LoadingPage/>
                    ) : (
                    page_index == PAGE_REGISTER ? (
                        <RegisterPage/>
                    ) : (
                        page_index == PAGE_LOGIN ? (
                            <LoginPage/>
                        ) : (
                            page_index == PAGE_MAIN ? (
                                <MainPage/>
                            ) : (
                                page_index == PAGE_CHAT ? (
                                    <ChatPage/>
                                ) : (
                                    page_index == PAGE_ADDFRIENDS ? (
                                        <AddFriendsPage/>
                                    ) : (
                                        page_index == PAGE_FRIENDSINFO ? (
                                            <FriendsInfoPage/>
                                        ) : (
                                            <ChatPage/>
                                        )))))))
                }
            </div>
        )
    }
}

