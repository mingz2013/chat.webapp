/**
 * Created by zhaojm on 21/12/2016.
 */

import React, { Component, PropTypes } from 'react'
import chatClient from '../network/ChatClient'
import eventDispatcher from '../network/EventDispatcher'

export default class LoadingPage extends Component {

    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        const { auth, gotoLoginPage, gotoMainPage } = this.props;
        chatClient.connect();
        eventDispatcher.addListener('signin', this.onSignIn.bind(this));
        if (!auth.token) {
            gotoLoginPage();
        } else {
            chatClient.signIn(auth);
        }
    }

    onSignIn(data) {
        console.log(data);

    }

    render() {

        return (
            <div>
                Loading...
            </div>
        )
    }
}