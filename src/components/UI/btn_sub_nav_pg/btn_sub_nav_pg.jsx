import React from 'react';
import st from "./btn_sub_nav.module.css";
import {Link} from "react-router-dom";
import NavIcon from "../../main_body/nav_bar/btns/icons/NavIcon";

const BtnSubNavPg = ({children, btnPath, title, icon}) => {
    return (
        <Link to={btnPath} className={st.link}>
            <div className={st.normal}>
                <NavIcon iconPath={icon}/>
                {title}
            </div>
        </Link>
    );
};

export default BtnSubNavPg;