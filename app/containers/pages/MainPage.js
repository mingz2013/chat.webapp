/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import {TAB_CHATS, TAB_CONTACTS, TAB_SETTINGS} from '../../constants/TabIndex'
import { changeTab } from '../../actions/index'
import MainPage from '../../components/pages/MainPage'
import {addMessage} from '../../actions/index'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages
});

const mapDispatchToProps = (dispatch) => {
    return {
        gotoChatsTab: (e) => dispatch(changeTab(TAB_CHATS)),
        gotoContactsTab: (e) => dispatch(changeTab(TAB_CONTACTS)),
        gotoSettingsTab: (e) => dispatch(changeTab(TAB_SETTINGS)),
        addMessageFunc: (message) => dispatch(addMessage(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)