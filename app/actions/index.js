import { CHANGE_PAGE, CHANGE_TAB, ADD_MESSAGE, UPDATE_AUTH, UPDATE_USERLIST, UPDATE_FRIENDSLIST, UPDATE_USERINFO } from '../constants/ActionTypes'

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
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

export const updateUserInfo = (user_info) => ({
    type: UPDATE_USERINFO,
    user_info
});

