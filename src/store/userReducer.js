export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SET_USER_NAME = 'SET_USER_NAME';

const initialState = {
    email: null,
    name: null,
    phone: null,
    fbLink: null,
    photoURL: null
}
export const userReducer = (user = initialState, {type, payload}) => {
    switch (type) {
        case SET_USER:
            return {...user, email: payload.email, name: payload.name, phone: payload.phone, fbLink: payload.fbLink, photoURL: payload.photoURL};
        case SET_USER_NAME:
            return {...user, name: payload.email};
        case REMOVE_USER:
            return {...user, email: null, name: null, phone: null, fbLink: null, photoURL: null};
        default:
            return user
    };
};