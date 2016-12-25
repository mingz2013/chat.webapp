import React, { Component, PropTypes } from 'react'

export default class SendChatMessage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        return (
            <div className="chat-send">
                <input type='text' ref='input'/>
                <button onClick={(e) => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }

    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onSendClick(text);
        node.value = ''
    }
}