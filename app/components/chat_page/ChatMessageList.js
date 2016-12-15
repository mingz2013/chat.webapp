import React, { Component, PropTypes } from 'react'
import ChatMessage from './ChatMessage'

export default class ChatMessageList extends Component {
    render() {

        return (
            <ul className="chat-box">
                {this.props.chat_messages.map((message, index) =>
                    <ChatMessage {...message}
                        key={index}
                    />
                )}
            </ul>
        )
    }
}