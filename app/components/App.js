/**
 * Created by zhaojm on 16/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import LoginPage from '../containers/LoginPage'
import RegisterPage from '../containers/RegisterPage'
import MainPage from '../containers/MainPage'
import ChatPage from '../containers/ChatPage'
import LoadingPage from '../containers/LoadingPage'

import { PAGE_CHAT, PAGE_LOGIN, PAGE_MAIN, PAGE_REGISTER, PAGE_LOADING } from '../constants/PageIndex'

export default class App extends Component {
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
                                    <ChatPage/>
                                )))))
                }
            </div>
        )
    }
}

