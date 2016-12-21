/**
 * Created by zhaojm on 21/12/2016.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions/index'
import { PAGE_CHAT, PAGE_LOGIN, PAGE_MAIN, PAGE_REGISTER } from '../constants/PageIndex'

import LoadingPage from '../components/LoadingPage'



const mapStateToProps = (state) => ({
    auth: state.auth,
    page_index: state.page_index,
    tab_index: state.tab_index,
    chat_messages: state.chat_messages
});

const mapDispatchToProps = (dispatch) => {
    return {

        gotoLoginPage: () => {
            dispatch(changePage(PAGE_LOGIN));
        },
        gotoMainPage: () => {

        },



    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage)