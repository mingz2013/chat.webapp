/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import ChatBox from '../chat/ChatBox'
import SendChatMessage from '../chat/SendChatMessage'

export default class ChatPage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        const { messages, onSendMessageClick } = this.props;
        return (
            <div className="chat">
                <ChatBox messages={messages}/>
                <SendChatMessage onSendClick={onSendMessageClick(message)}/>
            </div>
        )
    }
}