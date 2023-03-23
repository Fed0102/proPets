import React from 'react';
import lost from '../../../../../assets/png/lost_black.png';
import st from './nav_btns_icons.module.css'

const NavLost = () => {
    return (
        <img className={st.body} src={lost}/>
    );
};

export default NavLost;