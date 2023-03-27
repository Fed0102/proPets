import React from 'react';
import st from './btn_nav_pg.module.css'
import {Link} from "react-router-dom";
import {useWindowPath} from "../../../hooks/useWindowPath";

const BtnNavPg = ({children, btnPath}) => {
    console.log(useWindowPath())
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+btnPath)
    return (
        <div className={useWindowPath === btnPath ? `${st.base} ${st.base_act}` : st.base}>
            <Link to={btnPath} className={st.link}>
                <div className={st.normal}>
                    {children}
                </div>
            </Link>
        </div>
    );
};

export default BtnNavPg;