import { SEND_CHAT_MESSAGE } from '../constants/ActionTypes'

const initialState = [];

export function chat_messages(state = initialState, action) {
    switch (action.type) {
        case SEND_CHAT_MESSAGE:
            return [
                ...state,
                {
                    text: action.message
                }
            ];
        default:
            return state
    }
}