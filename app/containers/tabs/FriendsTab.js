/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

import FriendsTab from '../../components/tabs/FriendsTab'

import {changePage, updateUserInfo} from '../../actions/index'
import {PAGE_USERLIST, PAGE_USERINFO} from '../../constants/PageIndex'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages,
    user_list: state.user_list,
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => {
    return {
        gotoAddFriendsPage: () => dispatch(changePage(PAGE_USERLIST)),
        gotoUserInfoPage: (user) => {
            dispatch(updateUserInfo(user));
            dispatch(changePage(PAGE_USERINFO));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsTab)