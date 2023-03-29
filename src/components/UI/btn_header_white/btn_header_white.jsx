import React from "react";
import st from "./btn_header_white.module.css";
import {useDispatch} from "react-redux";
import {SET_VISIBLE_MODAL} from "../../../store/modalReducer";

const BtnHeaderWhite = ({children, white}) => {

    const dispatch = useDispatch();

    return (
            <div className={white ? `${st.base} ${st.white}` : st.base} onClick={() => dispatch({type: SET_VISIBLE_MODAL, payload: true})}>
                {children}
            </div>
    );
};

export default BtnHeaderWhite;