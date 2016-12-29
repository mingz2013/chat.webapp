/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import ChatItem from '../common/ChatItem'

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
                <div>
                    <button>Profile</button>
                    <span>username</span>
                    <button>Close</button>
                </div>

                <div className="chat-box">
                    <ChatItem {...message} key={index}/>
                    {
                        messages.map((message, index) =>
                            <ChatItem {...message} key={index}/>
                        )
                    }
                </div>

                <div className="chat-send">
                    <input type='text' ref='input'/>
                    <button onClick={(e) => this.handleClick(e)}>
                        Add
                    </button>
                </div>

            </div>
        )
    }

    handleClick(e) {
        const { messages, onSendMessageClick } = this.props;
        const node = this.refs.input;
        const text = node.value.trim();
        onSendMessageClick(text);
        node.value = ''
    }
}