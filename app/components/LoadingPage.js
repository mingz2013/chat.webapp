/**
 * Created by zhaojm on 21/12/2016.
 */

import React, { Component, PropTypes } from 'react'
export default class LoadingPage extends Component {

    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        const { onMount } = this.props;
        onMount();
    }

    render() {

        return (
            <div onLoad={ () => this.handleOnLoad() }>
                Loading...
            </div>
        )
    }
}