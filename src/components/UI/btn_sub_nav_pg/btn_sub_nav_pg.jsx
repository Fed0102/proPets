import React from 'react';
import st from "./btn_sub_nav.module.css";

const BtnSubNavPg = ({children}) => {
    return (
        <button className={st.normal}>
            {children}
        </button>
    );
};

export default BtnSubNavPg;