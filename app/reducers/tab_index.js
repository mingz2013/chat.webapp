import { CHANGE_TAB } from '../constants/ActionTypes'
import { TAB_MESSAGE } from '../constants/TabIndex'

const initialState = TAB_MESSAGE;

export function tab_index(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            //console.log(action);
            return action.tab_index;
        default:
            return state
    }
}
