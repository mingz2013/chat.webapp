/**
 * Created by zhaojm on 25/12/2016.
 */
import { UPDATE_ALLUSERS } from '../constants/ActionTypes'


const initialState = [];

export function all_users(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ALLUSERS:
            return state;
        default:
            return state
    }
}