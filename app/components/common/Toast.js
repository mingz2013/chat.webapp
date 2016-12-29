/**
 * Created by zhaojm on 29/12/2016.
 */
import React, { Component, PropTypes } from 'react'


export default class Toast extends Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {
        const { toast } = this.props;
        return (
            <div>{toast}</div>
        )
    }
}