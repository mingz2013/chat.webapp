/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {sendChatMessage} from '../../actions/index'

import FriendsInfoPage from '../../components/pages/FriendsInfoPage'

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

export default connect(mapStateToProps, mapDispatchToProps)(FriendsInfoPage)