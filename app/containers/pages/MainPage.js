/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import {TAB_ACCOUNT, TAB_FRIENDS, TAB_MESSAGE} from '../../constants/TabIndex'
import { changeTab } from '../../actions/index'
import MainPage from '../../components/pages/MainPage'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages
});

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageClick: (e) => dispatch(changeTab(TAB_MESSAGE)),
        onFriendsClick: (e) => dispatch(changeTab(TAB_FRIENDS)),
        onAccountClick: (e) => dispatch(changeTab(TAB_ACCOUNT))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)