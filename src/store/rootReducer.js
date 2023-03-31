import {combineReducers} from "redux";
import {modalReducer} from "./modalReducer";
import {userRegistrationReducer} from "./userRegistrationReducer";
import {postsReducer} from "./postsReducer";

export const rootReducer = combineReducers({
    modal: modalReducer,
    userRegistration: userRegistrationReducer,
    posts : postsReducer
})