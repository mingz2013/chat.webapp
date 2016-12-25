import { CHANGE_PAGE, CHANGE_TAB, SEND_CHAT_MESSAGE, UPDATE_AUTH, UPDATE_ALLUSERS } from '../constants/ActionTypes'

export const sendChatMessage = (message) => ({
    type: SEND_CHAT_MESSAGE,
    message
});

export const changePage = (page_index) => ({
    type: CHANGE_PAGE,
    page_index
});

export const changeTab = (tab_index) => ({
    type: CHANGE_TAB,
    tab_index
});

export const updateAuth = (auth) => ({
    type: UPDATE_AUTH,
    auth
});

export const updateAllUsers = (all_users) => ({
    type: UPDATE_ALLUSERS,
    all_users
});