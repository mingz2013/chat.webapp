/**
 * Created by zhaojm on 25/12/2016.
 */
import { UPDATE_USERLIST } from '../constants/ActionTypes'


const initialState = [];

export default user_list = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERLIST:
            return action.user_list;
        default:
            return state
    }
}