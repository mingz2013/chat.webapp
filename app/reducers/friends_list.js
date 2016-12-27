/**
 * Created by zhaojm on 25/12/2016.
 */
import { UPDATE_FRIENDSLIST } from '../constants/ActionTypes'


const initialState = [];

export default friends_list = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FRIENDSLIST:
            return action.friends_list;
        default:
            return state
    }
}