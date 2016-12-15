import { CHANGE_PAGE, CHANGE_TAB, SEND_CHAT_MESSAGE } from '../constants/ActionTypes'

export const sendChatMessage = (message) =
>
({
    type: SEND_CHAT_MESSAGE,
    message
});

export const changePage = (page_index) =
>
({
    type: CHANGE_PAGE,
    page_index
});

export const changeTab = (tab_index) =
>
({
    type: CHANGE_TAB,
    tab_index
});