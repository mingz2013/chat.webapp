/**
 * Created by zhaojm on 25/12/2016.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {changePage, updateUserList, updateUserInfo} from '../../actions/index'
import {PAGE_FRIENDSINFO} from '../../constants/PageIndex'

import UserListPage from '../../components/pages/UserListPage'

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
        gotoUserInfoPage: (user) => {
            dispatch(updateUserInfo(user));
            dispatch(changePage(PAGE_FRIENDSINFO));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage)