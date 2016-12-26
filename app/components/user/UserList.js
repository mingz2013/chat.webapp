/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'

import User from './User'

export default class UserList extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {
        const { user_list, gotoUserInfoPage } = this.props;
        return (
            <div className="chat">
                {
                    user_list.map((user, index) =>
                        <User user={user} key={index} gotoUserInfoPage={gotoUserInfoPage}/>
                    )
                }
            </div>
        )
    }
}