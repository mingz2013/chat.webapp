/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import AccountTab from './account_tab/AccountTab'
import FriendsListTab from './friends_list_tab/FriendsListTab'
import MessageTab from './message_tab/MessageTab'
import BottomTabs from './BottomTabs'
import {TAB_ACCOUNT, TAB_FRIENDS_LIST, TAB_MESSAGE} from '../../constants/TabIndex'
import { changeTab } from '../../actions/index'

export default class MainPage extends Component {

    render() {

        const { dispatch, tab_index } = this.props;
        return (
            <div className="main">
                {
                    tab_index == TAB_MESSAGE ? (
                        <MessageTab dispatch={dispatch}/>
                    ) : (
                        tab_index == TAB_FRIENDS_LIST ? (
                            <FriendsListTab dispatch={dispatch}/>
                        ) : (
                            <AccountTab dispatch={dispatch}/>
                        )
                    )
                }
                <BottomTabs dispatch={dispatch}/>
            </div>
        )
    }
}