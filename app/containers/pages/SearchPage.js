/**
 * Created by zhaojm on 25/12/2016.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {changePage, updateUserList, updateUserInfo} from '../../actions/index'
import {PAGE_PROFILE, PAGE_MAIN} from '../../constants/PageIndex'

import SearchPage from '../../components/pages/SearchPage'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages,
    auth: state.auth,
    user_list: state.user_list
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserListFunc: (user_list) => dispatch(updateUserList(user_list)),
        gotoProfilePage: (user) => {
            dispatch(updateUserInfo(user));
            dispatch(changePage(PAGE_PROFILE));
        },
        gotoMainPage: () => dispatch(changePage(PAGE_MAIN))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)