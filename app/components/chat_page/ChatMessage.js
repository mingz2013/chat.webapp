import React, { Component, PropTypes } from 'react'

export default class ChatMessage extends Component {
    render() {
        return (
            < li
        className = "chat-message clear" >
            < img
        className = "fr"
        src = ""
        alt = "" / >
            < div
        className = "fr" >
            {this.props.text
    }
    </
        div >
        < / li >
    )
    }
}