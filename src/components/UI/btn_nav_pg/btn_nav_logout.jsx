import React from 'react';
import st from './btn_nav_pg.module.css';
import NavIcon from "../../main_body/nav_bar/btns/icons/NavIcon";

const BtnNavLogout = ({icon, title}) => {
    return (
        <div className={st.base_logout}>
            <div className={st.link}>
                <div className={`${st.normal} ${st.normal_logout}`}>
                    <NavIcon iconPath={icon} act_green={false}/>
                    {title}
                </div>
            </div>
        </div>
    );
};

export default BtnNavLogout;