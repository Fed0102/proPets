import {combineReducers} from "redux";
import {modalReducer} from "./modalReducer";
import {userReducer} from "./userReducer";
import {userRegistrationReducer} from "./userRegistrationReducer";

export const rootReducer = combineReducers({
    modal: modalReducer,
    user: userReducer,
    userRegistration: userRegistrationReducer
})