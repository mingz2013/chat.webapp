import { combineReducers } from 'redux'
import { messages } from './messages'
import {page_index} from './page_index'
import { tab_index } from './tab_index'
import {auth} from './auth'
import {user_list} from './user_list'
import {friends_list} from './friends_list'

const rootReducer = combineReducers({
    auth,
    page_index,
    tab_index,
    messages,
    user_list,
    friends_list

});

export default rootReducer