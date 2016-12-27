import { CHANGE_TAB } from '../constants/ActionTypes'
import { TAB_CONTACTS, TAB_CHATS } from '../constants/TabIndex'

const initialState = TAB_CONTACTS;

export default tab_index = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            //console.log(action);
            return action.tab_index;
        default:
            return state
    }
}
