export const SET_CHANGE_AUTH = 'SET_CHANGE_AUTH';
export const SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL';
export const SET_CHANGE_LOST_BTN = 'SET_CHANGE_LOST_BTN';
export const SET_CHANGE_FOUND_BTN = 'SET_CHANGE_FOUND_BTN';
export const SET_CHANGE_MAIN_BODY = 'SET_CHANGE_MAIN_BODY';
export const CHANGE_HEADER = 'CHANGE_HEADER';

const initialState = {
    auth: false,
    modal: false,
    lostBtn: 'I lost my pet!',
    foundBtn: 'I found a pet!',
    mainBody: 'LostFoundPosts',
    headerState: 'posts'
}

export const modalReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CHANGE_AUTH:
            return {...state, auth: payload}
        case SET_VISIBLE_MODAL:
            return {...state, modal: payload};
        case SET_CHANGE_LOST_BTN:
            return {...state, lostBtn: payload};
        case SET_CHANGE_FOUND_BTN:
            return {...state, foundBtn: payload};
        case SET_CHANGE_MAIN_BODY:
            return {...state, mainBody: payload}
        case CHANGE_HEADER:
            return {...state, headerState: payload}
        default:
            return state
    }
}