import React from 'react';
import vetHelp from '../../../../../assets/png/vetHelp.png';
import st from './nav_btns_icons.module.css'

const SubNavVetHelp = () => {
    return (
        <img className={st.body + ' ' + st.color} src={vetHelp}/>
    );
};

export default SubNavVetHelp;