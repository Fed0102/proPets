export const SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL';
export const SET_CHANGE_LOST_BTN = 'SET_CHANGE_LOST_BTN';
export const SET_CHANGE_FOUND_BTN = 'SET_CHANGE_FOUND_BTN';

const initialState = {
    modal: false,
    lostBtn: 'I lost my pet!',
    foundBtn: 'I found a pet!'
}

export const modalReducer = (modal = initialState, {type, payload}) => {
    switch (type) {
        case SET_VISIBLE_MODAL:
            return {...modal, modal: payload};
        case SET_CHANGE_LOST_BTN:
            return {...modal, lostBtn: payload};
        case SET_CHANGE_FOUND_BTN:
            return {...modal, foundBtn: payload};
        default:
            return modal
    }
}