import { CHANGE_PAGE } from '../constants/ActionTypes'
import { PAGE_LOGIN, PAGE_MAIN, PAGE_CHAT, PAGE_LOADING } from '../constants/PageIndex'

const initialState = PAGE_LOADING;

export function page_index(state = PAGE_LOADING, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.page_index;
        default:
            return state
    }
}
