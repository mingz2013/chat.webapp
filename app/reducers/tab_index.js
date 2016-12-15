import { CHANGE_TAB } from '../constants/ActionTypes'
import { TAB_MESSAGE } from '../constants/TabIndex'

export function tab_index(state = TAB_MESSAGE, action) {
    switch (action.type) {
        case CHANGE_TAB:
            console.log(action);
            return action.tab_index;
        default:
            return state
    }
}
