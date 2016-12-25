/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'

import Friends from './Friends'

export default class FriendsList extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {
        const { friends_list, gotoFriendsInfoPage } = this.props;
        return (
            <div className="chat">
                {
                    friends_list.map((friends, index) =>
                        <Friends friends={friends} key={index} gotoFriendsInfoPage={gotoFriendsInfoPage}/>
                    )
                }
            </div>
        )
    }
}