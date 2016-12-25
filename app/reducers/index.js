import { combineReducers } from 'redux'
import { messages } from './messages'
import {page_index} from './page_index'
import { tab_index } from './tab_index'
import {auth} from './auth'
import {all_users} from './all_users'

const rootReducer = combineReducers({
    auth,
    page_index,
    tab_index,
    messages,
    all_users

});

export default rootReducer