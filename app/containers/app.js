import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import App from '../components/App'


const mapStateToProps = (state) => ({
    page_index: state.page_index
});

//const mapDispatchToProps = (dispatch) => {
//    return {
//        onTodoClick: (id) => {
//            dispatch(toggleTodo(id))
//        }
//    }
//};

export default connect(mapStateToProps)(App)