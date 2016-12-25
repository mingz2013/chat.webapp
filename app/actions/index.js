import { CHANGE_PAGE, CHANGE_TAB, SEND_CHAT_MESSAGE, UPDATE_AUTH, UPDATE_USERLIST, UPDATE_FRIENDSLIST, UPDATE_FRIENDSINFO } from '../constants/ActionTypes'

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

export const updateUserList = (user_list) => ({
    type: UPDATE_USERLIST,
    user_list
});

export const updateFriendsList = (friends_list) => ({
    type: UPDATE_FRIENDSLIST,
    friends_list
});

export const updateFriendsInfo = (friends_info) => ({
    type: UPDATE_FRIENDSINFO,
    friends_info
});

