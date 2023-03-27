import React from "react";
import st from "./btn_header_main.module.css";
import {useDispatch} from "react-redux";
import {SET_CHANGE_MAIN_BODY} from "../../../store/modalReducer";

const Btn_header_main = ({children, green}) => {

    const dispatch = useDispatch();

    return (
        green
            ?
            <button className={st.base}>
                {children}
            </button>
            :
            <button className={st.yellow + ' ' + st.base}>
                {children}
            </button>
    );
};

export default Btn_header_main;