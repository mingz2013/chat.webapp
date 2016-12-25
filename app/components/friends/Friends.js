/**
 * Created by zhaojm on 25/12/2016.
 */
import React, { Component, PropTypes } from 'react'


export default class Friends extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {
        const { friends } = this.props;
        return (
            <div className="friends-item">{friends.username}</div>
        )
    }
}