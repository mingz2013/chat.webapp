/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

import FriendsTab from '../../components/tabs/FriendsTab'

import {changePage} from '../../actions/index'
import {PAGE_ADDFRIENDS} from '../../constants/PageIndex'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages
});

const mapDispatchToProps = (dispatch) => {
    return {
        gotoAddFriendsPage: () => dispatch(changePage(PAGE_ADDFRIENDS))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsTab)