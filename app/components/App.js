/**
 * Created by zhaojm on 16/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import LoginPage from './login_page/LoginPage'
import RegisterPage from './register_page/RegisterPage'
import MainPage from './main_page/MainPage'
import ChatPage from './chat_page/ChatPage'

import { PAGE_CHAT, PAGE_LOGIN, PAGE_MAIN, PAGE_REGISTER } from '../constants/PageIndex'

export default class App extends Component {
    render() {
        const { page_index, tab_index, chat_messages } = this.props;

        return (
            <div className="height-init">
                {
                    page_index == PAGE_REGISTER ? (
                        <RegisterPage/>
                    ) : (
                        page_index == PAGE_LOGIN ? (
                            <LoginPage/>
                        ) : (
                            page_index == PAGE_MAIN ? (
                                <MainPage tab_index={tab_index}/>
                            ) : (
                                page_index == PAGE_CHAT ? (
                                    <ChatPage chat_messages={chat_messages}/>
                                ) : (
                                    <ChatPage chat_messages={chat_messages}/>
                                ))))
                }
            </div>
        )
    }
}

