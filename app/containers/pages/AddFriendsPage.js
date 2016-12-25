/**
 * Created by zhaojm on 25/12/2016.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {updateAllUsers} from '../../actions/index'

import AddFriendsPage from '../../components/pages/AddFriendsPage'

const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    messages: state.messages,
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateAllUsersFunc: (all_users) => dispatch(updateAllUsers(all_users))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendsPage)