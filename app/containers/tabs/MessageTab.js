/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MessageTab from '../../components/tabs/MessageTab'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    chat_messages: state.chat_messages
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (message) => dispatch(sendChatMessage(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageTab)