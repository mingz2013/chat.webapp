/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'


export default class UserItem extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {
        const { user } = this.props;
        return (
            <div className="friends-item" onClick={this.onUserClick.bind(this)}>{user.username}</div>
        )
    }

    onUserClick() {
        const { user, gotoProfilePage } = this.props;
        gotoProfilePage(user);
    }
}