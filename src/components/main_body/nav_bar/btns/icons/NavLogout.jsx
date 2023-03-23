import React from 'react';
import logout from '../../../../../assets/png/logout.png';
import st from './nav_btns_icons.module.css'

const NavLogout = () => {
    return (
        <img className={st.body} src={logout}/>
    );
};

export default NavLogout;