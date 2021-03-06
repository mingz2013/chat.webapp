/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import MsgItem from '../common/MsgItem'

export default class ChatsTab extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        const { messages } = this.props;

        return (

            <div className="main-message">
                <div className="message-title">
                    <span>Chats</span>
                </div>
                <div>
                    { // chat list
                        messages.map((message, index) =>
                            <MsgItem message={message}/>
                        )
                    }
                </div>

            </div>
        )
    }
}