/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import ChatMessage from './ChatMessage'

export default class ChatBox extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {

        return (
            <ul className="chat-box">
                {this.props.messages.map((message, index) =>
                    <ChatMessage {...message}
                        key={index}
                    />
                )}
            </ul>
        )
    }
}