/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

import ContactsTab from '../../components/tabs/ContactsTab'

import {changePage, updateUserInfo} from '../../actions/index'
import {PAGE_SEARCH, PAGE_PROFILE} from '../../constants/PageIndex'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages,
    friends_list: state.friends_list,
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => {
    return {
        gotoSearchPage: () => dispatch(changePage(PAGE_SEARCH)),
        gotoProfilePage: (user) => {
            dispatch(updateUserInfo(user));
            dispatch(changePage(PAGE_PROFILE));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsTab)