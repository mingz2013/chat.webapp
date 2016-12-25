/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changePage, updateAuth } from '../../actions/index'
import { PAGE_CHAT, PAGE_LOGIN, PAGE_MAIN, PAGE_REGISTER } from '../../constants/PageIndex'

import RegisterPage from '../../components/pages/RegisterPage'


const mapStateToProps = (state) => ({
    auth: state.auth,
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages
});

const mapDispatchToProps = (dispatch) => {
    return {
        gotoMainPage: () => dispatch(changePage(PAGE_MAIN)),
        gotoLoginPage: () => dispatch(changePage(PAGE_LOGIN)),
        updateAuthFunc: (auth) => dispatch(updateAuth(auth))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)