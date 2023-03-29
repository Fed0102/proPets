// export const SET_USER = 'SET_USER';
// export const SET_INFO_USER = 'SET_INFO_USER';
// export const REMOVE_USER = 'REMOVE_USER';
// export const CHANGE_NAME = 'CHANGE_NAME';

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null
}
export const userReducer = (user = initialState, {type, payload}) => {
    switch (type) {
        // case SET_USER:
        //     return {...user, email: payload.email, token: payload.token, id: payload.id}
        // case SET_INFO_USER:
        //     return {...user, name: payload.name, id: payload.id}
        // case REMOVE_USER:
        //     return {...user, email: null, token: null, id: null, name: null}
        // case CHANGE_NAME:
        //     return {...user, name: payload.name}
        default:
            return user
    }
}