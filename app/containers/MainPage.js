/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import {TAB_ACCOUNT, TAB_FRIENDS_LIST, TAB_MESSAGE} from '../constants/TabIndex'

import MainPage from '../components/main_page/MainPage'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    chat_messages: state.chat_messages
});

const mapDispatchToProps = (dispatch) => {
    return {
        //onRegisterClick: (username, password, password2) => dispatch(changePage(PAGE_MAIN)),
        //onLoginClick: (e) => dispatch(changePage(PAGE_LOGIN))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)