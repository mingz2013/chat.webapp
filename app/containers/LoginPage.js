/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions/index'
import { PAGE_CHAT, PAGE_LOGIN, PAGE_MAIN, PAGE_REGISTER } from '../constants/PageIndex'

import LoginPage from '../components/LoginPage'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    chat_messages: state.chat_messages
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginClick: (username, password) => dispatch(changePage(PAGE_MAIN)),
        onRegisterClick: (e) => dispatch(changePage(PAGE_REGISTER))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)