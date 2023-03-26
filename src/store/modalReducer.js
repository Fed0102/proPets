export const SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL';
export const SET_CHANGE_LOST_BTN = 'SET_CHANGE_LOST_BTN';
export const SET_CHANGE_FOUND_BTN = 'SET_CHANGE_FOUND_BTN';
export const SET_CHANGE_PAGE = 'SET_CHANGE_PAGE';

const initialState = {
    page: ' StartPage',
    modal: false,
    lostBtn: 'I lost my pet!',
    foundBtn: 'I found a pet!'
}

export const modalReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CHANGE_PAGE:
            return {...state, page: payload}
        case SET_VISIBLE_MODAL:
            return {...state, modal: payload};
        case SET_CHANGE_LOST_BTN:
            return {...state, lostBtn: payload};
        case SET_CHANGE_FOUND_BTN:
            return {...state, foundBtn: payload};
        default:
            return state
    }
}