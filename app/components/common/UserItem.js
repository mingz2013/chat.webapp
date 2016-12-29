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
            <div className="friends-item clear" onClick={this.onUserClick.bind(this)}>
                <img className="fl" src="" alt=""/>
                <div className="friends-item-user fl">{user.username}-444</div>
            </div>
        )
    }

    onUserClick() {
        const { user, gotoProfilePage } = this.props;
        gotoProfilePage(user);
    }
}