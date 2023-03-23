import React from "react";
import st from "./btn_header_start.module.css";

const Btn_header_start = ({children}) => {
    return (
            <button className={st.base}>
                {children}
            </button>
    );
};

export default Btn_header_start;