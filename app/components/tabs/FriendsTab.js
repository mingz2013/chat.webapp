/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import UserList from '../user/UserList'

export default class FriendsTab extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        const { user_list, gotoAddFriendsPage, gotoUserInfoPage } = this.props;

        return (
            <div className="main-friends">
                <div className="friends-item" onClick={gotoAddFriendsPage}>new friends</div>
                <UserList user_list={user_list} gotoUserInfoPage={gotoUserInfoPage}/>
            </div>
        )
    }
}