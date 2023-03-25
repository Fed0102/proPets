import React from 'react';
import st from "./btn_sub_nav.module.css";
import {Link} from "react-router-dom";

const BtnSubNavPg = ({children, btnPath}) => {
    return (
        <Link to={btnPath} className={st.link}>
            <div className={st.normal}>
                {children}
            </div>
        </Link>
    );
};

export default BtnSubNavPg;