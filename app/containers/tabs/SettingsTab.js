/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import SettingsTab from '../../components/tabs/SettingsTab'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (message) => dispatch(sendChatMessage(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTab)