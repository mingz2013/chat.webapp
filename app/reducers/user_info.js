/**
 * Created by zhaojm on 25/12/2016.
 */
import { UPDATE_USERINFO } from '../constants/ActionTypes'


const initialState = [];

export function user_info(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USERINFO:
            return action.user_info;
        default:
            return state
    }
}