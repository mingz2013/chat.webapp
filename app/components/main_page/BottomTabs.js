/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'
import {TAB_ACCOUNT, TAB_FRIENDS_LIST, TAB_MESSAGE} from '../../constants/TabIndex'

export default class BottomTabs extends Component {
    render() {

        const { changeTab } = this.props;
        return (
            < div
        className = "page-button" >
            < span
        onClick = {(e) =
    >
        {
            changeTab(TAB_MESSAGE)
        }
    }>
        message < / span >
        < span
        onClick = {(e) =
    >
        {
            changeTab(TAB_FRIENDS_LIST)
        }
    }>
        friends < / span >
        < span
        onClick = {(e) =
    >
        {
            changeTab(TAB_ACCOUNT)
        }
    }>
        account < / span >
        < / div >
    )
    }

}