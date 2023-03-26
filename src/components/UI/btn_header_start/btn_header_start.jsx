import React from "react";
import st from "./btn_header_start.module.css";
import {useDispatch} from "react-redux";
import {SET_VISIBLE_MODAL} from "../../../store/modalReducer";

const Btn_header_start = ({children}) => {

    const dispatch = useDispatch();

    return (
        <button className={st.base} onClick={() => dispatch({type: SET_VISIBLE_MODAL, payload: true})}>
            {children}
        </button>
    );
};

export default Btn_header_start;