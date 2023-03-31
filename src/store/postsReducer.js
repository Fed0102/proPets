export const SET_UID = 'SET_UID';

const initialState = {
    uid: '',
}
export const postsReducer = (posts = initialState, {type, payload}) => {
    switch (type) {
        case SET_UID:
            return {...posts, name: payload}
        default:
            return posts;
    }
}