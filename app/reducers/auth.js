/**
 * Created by zhaojm on 21/12/2016.
 */
import { UPDATE_AUTH } from '../constants/ActionTypes'


const initialState = {
    "token": null,
};

export function auth(state = initialState, action) {
    switch (action.type) {
        case UPDATE_AUTH:
            return state;
        default:
            return state
    }
}