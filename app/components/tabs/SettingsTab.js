/**
 * Created by zhaojm on 23/09/2016.
 */
import React, { Component, PropTypes } from 'react'

export default class SettingsTab extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }
    render() {
        //const { dispatch, chats } = this.props;

        return (
            <div className="main-account">
                <div className="message-title">
                    <span>Contacts</span>
                    <button>Add</button>
                </div>
                <div>
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

            </div>
        )
    }
}