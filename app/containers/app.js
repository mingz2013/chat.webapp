import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import App from '../components/App'


const mapStateToProps = (state) => ({
    page_index: state.page_index,
    tab_index: state.tab_index,
    chat_messages: state.chat_messages
});

//const mapDispatchToProps = (dispatch) => {
//    return {
//        onTodoClick: (id) => {
//            dispatch(toggleTodo(id))
//        }
//    }
//};

export default connect(mapStateToProps)(App)