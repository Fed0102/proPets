import React from "react";
import st from "./btn_header_main.module.css";

const Btn_header_main = ({children, green}) => {
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