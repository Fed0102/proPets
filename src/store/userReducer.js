export const REMOVE_USER = 'REMOVE_USER';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_LOADED = 'SET_USER_NAME';

const initialState = {
    name: null,
    loaded: false
}
export const userReducer = (user = initialState, {type, payload}) => {
    switch (type) {
        case SET_USER_NAME:
            return {name: payload};
        case SET_USER_LOADED:
            return {loaded: payload};
        case REMOVE_USER:
            return {name: null};
        default:
            return user
    }
};