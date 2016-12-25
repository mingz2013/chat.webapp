/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import ChatMessageList from './message/ChatMessageList'
import SendChatMessage from './message/SendChatMessage'

export default class ChatPage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        const { chat_messages, onSendMessageClick } = this.props;
        return (
            <div className="chat">
                <ChatMessageList chat_messages={chat_messages}/>
                <SendChatMessage onSendClick={onSendMessageClick(message)}/>
            </div>
        )
    }
}