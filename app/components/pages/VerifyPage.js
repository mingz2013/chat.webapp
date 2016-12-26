/**
 * Created by zhaojm on 26/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import chatClient from '../../network/ChatClient'
import eventDispatcher from '../../network/EventDispatcher'


export default class VerifyPage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {
        const { gotoBack } = this.props;
        return (
            <div className="chat">
                <div>
                    <button onClick={gotoBack}>Cancel</button>
                    <span>Verify</span>
                    <button onClick={this.onSendClick.bind(this)}>Send</button>
                </div>

                <div className="chat">
                    <input ref="input" type="text"/>
                </div>

            </div>
        )
    }

    onSendClick(e) {
        const { auth, user_info, gotoBack } = this.props;
        const node = this.refs.input;
        const text = node.value.trim();
        chatClient.friends_add(auth, user_info.username, text);
        node.value = ''
    }
}