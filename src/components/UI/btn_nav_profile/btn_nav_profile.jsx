import React from 'react';
import st from './btn_nav_profile.module.css'
import {Link} from "react-router-dom";
import {useWindowPath} from "../../../hooks/useWindowPath";


const BtnNavPrfl = ({children, btnPath}) => {
    const location = useWindowPath();
    const actBtn = btnPath.some((path) => path === location);
    return (
        <div className={actBtn ? `${st.base} ${st.base_act}` : st.base}>
            <Link to={btnPath[0]} className={st.link}>
                <div className={actBtn ? `${st.normal} ${st.normal_act}` : st.normal}>
                    {children}
                </div>
            </Link>
        </div>
    );
};

export default BtnNavPrfl;