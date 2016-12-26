/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {sendChatMessage, changePage, updateUserInfo} from '../../actions/index'


import ProfilePage from '../../components/pages/ProfilePage'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages,
    user_info: state.user_info,
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserInfoFunc: (user) => dispatch(updateUserInfo(user))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)