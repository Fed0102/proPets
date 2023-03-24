import React from 'react';
import walking from '../../../../../assets/png/walking.png';
import st from './nav_btns_icons.module.css'

const SubNavWalking = () => {
    return (
        <img className={st.body + ' ' + st.color} src={walking}/>
    );
};

export default SubNavWalking;