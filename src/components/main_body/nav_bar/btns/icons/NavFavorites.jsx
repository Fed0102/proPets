import React from 'react';
import star from '../../../../../assets/png/star_full.png';
import st from './nav_btns_icons.module.css'

const NavFavorites = () => {
    return (
        <img className={st.body} src={star}/>
    );
};

export default NavFavorites;