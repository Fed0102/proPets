import React from "react";
import st from "./btn_header_green.module.css";
import {Link} from "react-router-dom";

const BtnHeaderGreen = ({children, green, btnPath, test}) => {
    return (
        <Link to={btnPath} className={st.link} onClick={()=>console.log(test)}>
            <div className={green ? st.base : `${st.base} ${st.yellow}`}>
                {children}
            </div>
        </Link>
    );
};

export default BtnHeaderGreen;