import { SEND_CHAT_MESSAGE } from '../constants/ActionTypes'

export function chat_messages(state = [], action) {
    switch (action.type) {
        case SEND_CHAT_MESSAGE:
            return [
                ...state,
            {
                text: action.message
            }
        ]
            ;
        default:
            return state
    }
}