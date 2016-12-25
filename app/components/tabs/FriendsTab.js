/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

export default class FriendsTab extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        //const { dispatch, chats } = this.props;

        return (
            <div className="main-friends">
                <div className="friends-item">new friends</div>
                <div className="friends-item">好友分组</div>
                <div className="friends-item">好友分组</div>
                <div className="friends-item">好友分组</div>
                <div className="friends-item">好友分组</div>
                <div className="friends-item">好友分组</div>

            </div>
        )
    }
}