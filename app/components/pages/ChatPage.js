/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import MessageList from '../message/MessageList'
import SendMessage from '../message/SendMessage'

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
                <MessageList messages={messages}/>
                <SendMessage onSendClick={onSendMessageClick(message)}/>
            </div>
        )
    }
}