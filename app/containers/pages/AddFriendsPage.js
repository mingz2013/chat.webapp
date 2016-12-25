/**
 * Created by zhaojm on 25/12/2016.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {updateUserList, updateFriendsInfo} from '../../actions/index'
import {PAGE_FRIENDSINFO} from '../../constants/PageIndex'

import AddFriendsPage from '../../components/pages/AddFriendsPage'

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
        gotoFriendsInfoPage: (friends) => {
            dispatch(updateFriendsInfo(friends));
            dispatch(changePage(PAGE_FRIENDSINFO));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendsPage)