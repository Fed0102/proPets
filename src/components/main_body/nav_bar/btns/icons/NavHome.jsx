import React from 'react';
import home from '../../../../../assets/png/home.png';
import st from './nav_btns_icons.module.css'

const NavHome = () => {
    return (
        <img className={st.body} src={home}/>
    );
};

export default NavHome;