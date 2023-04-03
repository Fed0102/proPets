import React from 'react';
import st from './btn_nav_profile.module.css'
import {Link} from "react-router-dom";
import {useWindowPath} from "../../../hooks/useWindowPath";
import Avatar from "../avatar/avatar";



const BtnNavPrfl = ({btnPath, text}) => {
    let user = localStorage.getItem('userInfo');
    let initial = JSON.parse(user);
    const location = useWindowPath();
    const actBtn = btnPath.some((path) => path === location);
    return (
        <div className={actBtn ? `${st.base} ${st.base_act}` : st.base}>
            <Link to={btnPath[0]} className={st.link}>
                <div className={actBtn ? `${st.normal} ${st.normal_act}` : st.normal}>
                    <Avatar photo={initial.photo}/>
                    <div className={st.text}>
                        {text}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BtnNavPrfl;