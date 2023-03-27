import React from 'react';
import st from './btn_nav_pg.module.css'
import {Link} from "react-router-dom";

const BtnNavPg = ({children, btnPath}) => {

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

export default BtnNavPg;