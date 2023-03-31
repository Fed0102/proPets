import {combineReducers} from "redux";
import {modalReducer} from "./modalReducer";
import {postsReducer} from "./postsReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    modal: modalReducer,
    user: userReducer,
    posts : postsReducer
})