export const REMOVE_USER = 'REMOVE_USER';
export const SET_USER_NAME = 'SET_USER_NAME';

const initialState = {
    name: null
}
export const userReducer = (user = initialState, {type, payload}) => {
    switch (type) {
        case SET_USER_NAME:
            return {name: payload};
        case REMOVE_USER:
            return {name: null};
        default:
            return user
    };
};