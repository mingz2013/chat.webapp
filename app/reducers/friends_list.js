/**
 * Created by zhaojm on 25/12/2016.
 */
import { UPDATE_FRIENDSLIST } from '../constants/ActionTypes'


const initialState = [];

export function friends_list(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FRIENDSLIST:
            return state;
        default:
            return state
    }
}