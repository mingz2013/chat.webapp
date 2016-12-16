/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import {TAB_ACCOUNT, TAB_FRIENDS_LIST, TAB_MESSAGE} from '../../constants/TabIndex'
import { changeTab } from '../../actions/index'

export default class BottomTabs extends Component {
    render() {
        return (
            <div className="page-button">
                <span onClick={(e) => {store.dispatch(changeTab(TAB_MESSAGE))}}>message</span>
                <span onClick={(e) => {store.dispatch(changeTab(TAB_FRIENDS_LIST))}}>friends</span>
                <span onClick={(e) => {store.dispatch(changeTab(TAB_ACCOUNT))}}>account</span>
            </div>
        )
    }

}