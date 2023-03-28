import React from 'react';
import st from './btn_nav_profile.module.css'
import {Link} from "react-router-dom";

const BtnNavPrfl = ({children, btnPath}) => {
    return (
        <div className={st.base}>
            <Link to={btnPath} className={st.link}>
                <div className={st.normal}>
                    {children}
                </div>
            </Link>
        </div>
    );
};

export default BtnNavPrfl;