/**
 * Created by zhaojm on 21/12/2016.
 */

import React, { Component, PropTypes } from 'react'
import chatClient from '../../network/ChatClient'
import eventDispatcher from '../../network/EventDispatcher'

export default class LoadingPage extends Component {

    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        const { auth, gotoLoginPage, gotoMainPage } = this.props;
        chatClient.connect();
        if (!auth.token) {
            gotoLoginPage();
        } else {
            gotoMainPage();
        }
    }

    render() {

        return (
            <div>
                Loading...
            </div>
        )
    }
}