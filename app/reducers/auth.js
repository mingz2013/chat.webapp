/**
 * Created by zhaojm on 21/12/2016.
 */
import { UPDATE_AUTH } from '../constants/ActionTypes'

export function auth(state = {}, action) {
    switch (action.type) {
        case UPDATE_AUTH:
            return state;
        default:
            return state
    }
}