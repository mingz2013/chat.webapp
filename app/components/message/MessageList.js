/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import Message from './Message'

export default class MessageList extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        const {messages} = this.props;
        return (
            <div className="main-message">
                {
                    messages.map((message, index) =>
                        <Message message={message} key={index}/>
                    )
                }
            </div>
        )
    }
}