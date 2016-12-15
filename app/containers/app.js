import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions/index'
import LoginPage from '../components/login_page/LoginPage'
import RegisterPage from '../components/register_page/RegisterPage'
import MainPage from '../components/main_page/MainPage'
import ChatPage from '../components/chat_page/ChatPage'

import { PAGE_CHAT, PAGE_LOGIN, PAGE_MAIN, PAGE_REGISTER } from '../constants/PageIndex'

class App extends Component {
    render() {
        const { dispatch, page_index, tab_index, chat_messages } = this.props;

        return (
            <div className="height-init">
                {
                    page_index == PAGE_REGISTER ? (
                        <RegisterPage dispatch={dispatch}/>
                    ) : (
                    page_index == PAGE_LOGIN ? (
                        <LoginPage dispatch={dispatch}/>
                    ) : (
                    page_index == PAGE_MAIN ? (
                        <MainPage dispatch={dispatch} tab_index={tab_index}/>
                    ) : (
                    page_index == PAGE_CHAT ? (
                        <ChatPage dispatch={dispatch} chat_messages={chat_messages}/>
                    ): (
                        <ChatPage dispatch={dispatch} chat_messages={chat_messages}/>
                    ))))
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    chat_messages: state.chat_messages
});

export default connect(mapStateToProps)(App)