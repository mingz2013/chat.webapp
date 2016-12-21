import { combineReducers } from 'redux'
import { chat_messages } from './chat_messages'
import {page_index} from './page_index'
import { tab_index } from './tab_index'
import {auth} from './auth'

const rootReducer = combineReducers({
    auth,
    page_index,
    tab_index,
    chat_messages

});

export default rootReducer