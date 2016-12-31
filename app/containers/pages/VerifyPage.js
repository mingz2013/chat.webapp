/**
 * Created by zhaojm on 26/12/2016.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {sendChatMessage, changePage, updateUserInfo} from '../../actions/index'
import {PAGE_MAIN, PAGE_VERIFY, PAGE_PROFILE} from '../../constants/PageIndex'

import VerifyPage from '../../components/pages/VerifyPage'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages,
    user_info: state.user_info,
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserInfoFunc: (user) => dispatch(updateUserInfo(user)),
        gotoMainPage: () => dispatch(changePage(PAGE_MAIN)),
        gotoProfilePage: () => dispatch(changePage(PAGE_PROFILE))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPage)