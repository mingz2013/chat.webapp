/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'

export default class ChatItem extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {
        return (
            <li className="chat-message clear">
                <img className="fr" src="" alt=""/>
                <div className="fr">
                    1233
                </div>
            </li>
        )
    }
}