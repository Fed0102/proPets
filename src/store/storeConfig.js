import {createStore} from "redux";
import {modalReducer} from "./modalReducer";



export const store = createStore(modalReducer)