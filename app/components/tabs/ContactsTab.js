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
        const { friends_list, gotoSearchPage, gotoProfilePage } = this.props;

        return (
            <div className="main-friends">
                <div className="message-title">
                    <span>Contacts</span>
                    <button className="pr" onClick={gotoSearchPage}>Search</button>
                </div>
                <div className="chat">
                    {
                        friends_list.map((user, index) =>
                            <UserItem user={user} key={index} gotoProfilePage={gotoProfilePage}/>
                        )
                    }
                </div>


            </div>
        )
    }
}