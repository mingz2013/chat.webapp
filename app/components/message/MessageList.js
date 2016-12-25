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

        return (
            <div className="main-message">
                {this.props.messages.map((message, index) =>
                    <Message {...message}
                        key={index}
                    />
                )}
            </div>
        )
    }
}