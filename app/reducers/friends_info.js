/**
 * Created by zhaojm on 25/12/2016.
 */
import { UPDATE_FRIENDSINFO } from '../constants/ActionTypes'


const initialState = [];

export function friends_info(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FRIENDSINFO:
            return state;
        default:
            return state
    }
}