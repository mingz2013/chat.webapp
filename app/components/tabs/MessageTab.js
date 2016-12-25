/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import MessageList from '../message/MessageList'

export default class MessageTab extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        //const { dispatch, chats } = this.props;

        return (
            <MessageList/>
        )
    }
}