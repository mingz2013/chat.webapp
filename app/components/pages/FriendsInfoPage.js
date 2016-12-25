/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'


export default class FriendsInfoPage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {
        //const { messages, onSendMessageClick } = this.props;
        return (
            <div className="main-account">
                <div className="account-user">
                    mingz
                </div>
                <div className="account-group">
                    <div className="account-item"></div>
                    <div className="account-item"></div>
                </div>
                <div className="account-group">
                    <div className="account-item"></div>
                    <div className="account-item"></div>
                </div>



            </div>
        )
    }
}