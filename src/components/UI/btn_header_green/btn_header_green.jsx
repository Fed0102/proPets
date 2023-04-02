import React from "react";
import st from "./btn_header_green.module.css";
import {Link} from "react-router-dom";

const BtnHeaderGreen = ({children, green, btnPath, onClick}) => {
    return (
        <Link to={btnPath} className={st.link} onClick={onClick}>
            <div className={green ? st.base : `${st.base} ${st.yellow}`}>
                {children}
            </div>
        </Link>
    );
};

export default BtnHeaderGreen;