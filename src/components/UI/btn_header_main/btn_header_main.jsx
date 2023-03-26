import React from "react";
import st from "./btn_header_main.module.css";
import {Link} from "react-router-dom";

const Btn_header_main = ({children, green, btnPath}) => {
    return (
        <Link to={btnPath} className={st.link}>
            <div className={green ? st.base : `${st.base} ${st.yellow}`}>
                {children}
            </div>
        </Link>
    );
};

export default Btn_header_main;