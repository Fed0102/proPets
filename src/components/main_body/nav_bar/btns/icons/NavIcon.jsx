import React from 'react';
import st from './nav_btns_icons.module.css';

const NavIcon = ({iconPath}) => {
    return (
        <img className={st.body} src={iconPath}/>
    );
};

export default NavIcon;