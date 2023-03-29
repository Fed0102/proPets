export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_LOCAL_USER = 'SET_LOCAL_USER';

const initialState = {
    name: null,
    email: null,
    password: null,
    localUser: false
}
export const userRegistrationReducer = (userRegistration = initialState, {type, payload}) => {
    switch (type) {
        case SET_USER_NAME:
            return {...userRegistration, name: payload}
        case SET_USER_EMAIL:
            return {...userRegistration, email: payload}
        case SET_USER_PASSWORD:
            return {...userRegistration, password: payload}
        case SET_LOCAL_USER:
            return {...userRegistration, localUser: payload}
        default:
            return userRegistration
    }
}