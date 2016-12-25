/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import AccountTab from '../../containers/tabs/AccountTab'
import FriendsTab from '../../containers/tabs/FriendsTab'
import MessageTab from '../../containers/tabs/MessageTab'

import {TAB_ACCOUNT, TAB_FRIENDS, TAB_MESSAGE} from '../../constants/TabIndex'


export default class MainPage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {

        const { tab_index, onMessageClick, onFriendsClick, onAccountClick } = this.props;
        return (
            <div className="main">
                {
                    tab_index == TAB_MESSAGE ? (
                        <MessageTab/>
                    ) : (
                        tab_index == TAB_FRIENDS ? (
                            <FriendsTab/>
                        ) : (
                            <AccountTab/>
                        )
                    )
                }
                <div className="page-button">
                    <span onClick={onMessageClick}>message</span>
                    <span onClick={onFriendsClick}>friends</span>
                    <span onClick={onAccountClick}>account</span>
                </div>
            </div>
        )
    }
}