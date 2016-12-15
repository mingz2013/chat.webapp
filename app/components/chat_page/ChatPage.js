/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import ChatMessageList from './ChatMessageList'
import SendChatMessage from './SendChatMessage'

import {sendChatMessage} from '../../actions/index'

export default class ChatPage extends Component {
    render() {
        const { dispatch, chat_messages } = this.props;
        return (
            < div
        className = "chat" >
            < ChatMessageList
        chat_messages = {chat_messages} / >
            < SendChatMessage
        onSendClick = {message
    =>
        dispatch(sendChatMessage(message))
    }/>
    </
        div >
    )
    }
}