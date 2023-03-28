import React from 'react';
import st from './btn_nav_pg.module.css'
import {Link} from "react-router-dom";
import {useWindowPath} from "../../../hooks/useWindowPath";
import NavIcon from "../../main_body/nav_bar/btns/icons/NavIcon";

const BtnNavPg = ({children, btnPath, icon, title}) => {
    //ewrefwefwrf
    //pjugivuvh
    const actBtn = useWindowPath() === btnPath;
    return (
        <div className={actBtn ? `${st.base} ${st.base_act}` : st.base}>
            <Link to={btnPath} className={st.link}>
                <div className={actBtn ? `${st.normal} ${st.normal_act}` : st.normal}>
                    <NavIcon iconPath={icon}/>
                    {title}
                </div>
            </Link>
        </div>
    );
};

export default BtnNavPg;