import React from 'react';
import st from "./btn_sub_nav.module.css";
import {Link} from "react-router-dom";
import NavIcon from "../../main_body/nav_bar/btns/icons/NavIcon";
import {useWindowPath} from "../../../hooks/useWindowPath";

const BtnSubNavPg = ({btnPath, title, icon}) => {
    const actBtn = useWindowPath() === btnPath;
    return (
        <Link to={btnPath} className={st.link}>
            <div className={actBtn ? `${st.normal} ${st.normal_act}` : st.normal}>
                <NavIcon iconPath={icon} act_yellow={actBtn} bd_black={true}/>
                {title}
            </div>
        </Link>
    );
};

export default BtnSubNavPg;