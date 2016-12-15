import { CHANGE_PAGE } from '../constants/ActionTypes'
import { PAGE_LOGIN, PAGE_MAIN, PAGE_CHAT } from '../constants/PageIndex'

export function page_index(state = PAGE_LOGIN, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.page_index;
        default:
            return state
    }
}
