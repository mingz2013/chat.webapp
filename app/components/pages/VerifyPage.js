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
        eventDispatcher.addListener('friends_add', this.onFriendsAdd.bind(this));
    }

    onFriendsAdd(data) {
        console.log(data);
        const { gotoProfilePage } = this.props;
        if (data.retcode == 0) {
            gotoProfilePage();
        } else {
            console.log("on friends add error");
        }
    }

    render() {
        const { gotoProfilePage } = this.props;
        return (
            <div className="chat">
                <div className="message-title">
                    <button className="pl" onClick={gotoProfilePage}>Cancel</button>
                    <span>Verify</span>
                    <button className="pr" onClick={this.onSendClick.bind(this)}>Send</button>
                </div>
                <input className="chat-input" ref="input" type="text" placeholder="verify message"/>
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