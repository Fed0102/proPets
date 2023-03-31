import {combineReducers} from "redux";
import {modalReducer} from "./modalReducer";
import {postsReducer} from "./postsReducer";
import {userReducer} from "./userReducer";
import {lostFoundFormReducer} from "./lostFoundFormReducer";

export const rootReducer = combineReducers({
    modal: modalReducer,
    user: userReducer,
    posts : postsReducer,
    form: lostFoundFormReducer
})