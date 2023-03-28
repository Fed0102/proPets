import React from 'react';
import st from './nav_btns_icons.module.css';

const NavIcon = ({iconPath, bd_black, act_green}) => {

    const classChoice = `${bd_black ? st.body_black : st.body } ${act_green&&st.act_green}`;

    return (
        <img className={classChoice} src={iconPath}/>
    );
};

export default NavIcon;