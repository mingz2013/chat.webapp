/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import FriendsList from '../friends/FriendsList'

export default class FriendsTab extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        const { gotoAddFriendsPage } = this.props;

        return (
            <div className="main-friends">
                <div className="friends-item" onClick={gotoAddFriendsPage}>new friends</div>
                <FriendsList/>
            </div>
        )
    }

    onNewFriendsClick(e) {


    }
}