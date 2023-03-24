import React from 'react';
import hotels from '../../../../../assets/png/hotels.png';
import st from './nav_btns_icons.module.css'

const SubNavHotels = () => {
    return (
        <img className={st.body + ' ' + st.color} src={hotels}/>
    );
};

export default SubNavHotels;