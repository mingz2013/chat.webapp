/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

export default class MsgItem extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        const {message, key} = this.props;
        return (
            <div className="message-item">
                <img className="fl" src="" alt=""/>
                <div className="message-item-user fl">{message.text}</div>
            </div>
        )
    }
}