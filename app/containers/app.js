import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions/index'
import LoginPage from '../components/login_page/LoginPage'
import MainPage from '../components/main_page/MainPage'
import ChatPage from '../components/chat_page/ChatPage'

import { PAGE_CHAT, PAGE_LOGIN, PAGE_MAIN } from '../constants/PageIndex'

class App extends Component {
    render() {
        const { dispatch, page_index, tab_index, chat_messages } = this.props;

        return (
            < div
        className = "height-init" >
        {
            page_index == PAGE_LOGIN ? (
        < LoginPage onLoginClick = {(username, password) =
    >
        dispatch(changePage(PAGE_MAIN))
    }/>
    ) :
        (
            page_index == PAGE_MAIN ? (
            < MainPage dispatch = {dispatch}
        tab_index = {tab_index} / >
    ) :
        (
        < ChatPage
        dispatch = {dispatch}
        chat_messages = {chat_messages} / >
    )
    )
    }
    </
        div >
    )
    }
}

let mapStateToProps = (state) =
>
({
    page_index: state.page_index,
    tab_index: state.tab_index,
    chat_messages: state.chat_messages
});

export default connect(mapStateToProps)(App)