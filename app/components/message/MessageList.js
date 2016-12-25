import React, { Component, PropTypes } from 'react'
import Message from './Message'

export default class ChatMessageList extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {

        return (
            <ul className="chat-box">
                {this.props.messages.map((message, index) =>
                    <Message {...message}
                        key={index}
                    />
                )}
            </ul>
        )
    }
}