import React from "react";
import st from "./btn_header_green.module.css";
import {Link} from "react-router-dom";

const BtnHeaderGreen = ({children, green, btnPath, click}) => {
    return (
        <Link to={btnPath} className={st.link} onClick={click}>
            <div className={green ? st.base : `${st.base} ${st.yellow}`}>
                {children}
            </div>
        </Link>
    );
};

export default BtnHeaderGreen;