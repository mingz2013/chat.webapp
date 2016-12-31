/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import SettingsTab from '../../containers/tabs/SettingsTab'
import ContactsTab from '../../containers/tabs/ContactsTab'
import ChatsTab from '../../containers/tabs/ChatsTab'

import {TAB_CHATS, TAB_CONTACTS, TAB_SETTINGS} from '../../constants/TabIndex'

import chatClient from '../../network/ChatClient'
import eventDispatcher from '../../network/EventDispatcher'




export default class MainPage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        eventDispatcher.addListener("new_message", this.onNewMessage.bind(this));
    }

    onNewMessage(data) {
        const {addMessageFunc} = this.props;
        if (data.retcode == 0) {
            let message_list = data.result;
            message_list.forEach((message) => {
                addMessageFunc(message);
            })
        }
    }

    render() {

        const { tab_index, gotoChatsTab, gotoContactsTab, gotoSettingsTab } = this.props;
        return (
            <div className="main">
                {
                    tab_index == TAB_CHATS ? (
                        <ChatsTab/>
                    ) : (
                        tab_index == TAB_CONTACTS ? (
                            <ContactsTab/>
                        ) : (
                            <SettingsTab/>
                        )
                    )
                }
                <div className="page-button">
                    <span onClick={gotoChatsTab}>Chats</span>
                    <span onClick={gotoContactsTab}>Contacts</span>
                    <span onClick={gotoSettingsTab}>Settings</span>
                </div>
            </div>
        )
    }
}