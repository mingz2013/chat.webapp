import { CHANGE_PAGE } from '../constants/ActionTypes'
import {PAGE_LOGIN, PAGE_MAIN, PAGE_CHAT, PAGE_LOADING, PAGE_PROFILE} from '../constants/PageIndex'

const initialState = PAGE_LOADING;

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.page_index;
        default:
            return state
    }
}
