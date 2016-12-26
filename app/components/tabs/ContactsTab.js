/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

import UserItem from '../common/UserItem'

export default class ContactsTab extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        const { user_list, gotoAddFriendsPage, gotoProfilePage } = this.props;

        return (
            <div className="main-friends">
                <div>
                    <span>Contacts</span>
                    <button onClick={gotoAddFriendsPage}>Add</button>
                </div>
                <div className="chat">
                    {
                        user_list.map((user, index) =>
                            <UserItem user={user} key={index} gotoProfilePage={gotoProfilePage}/>
                        )
                    }
                </div>


            </div>
        )
    }
}