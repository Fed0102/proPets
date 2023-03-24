import React from 'react';
import fostering from '../../../../../assets/png/fostering.png';
import st from './nav_btns_icons.module.css';

const SubNavFostering = () => {
    return (
        <img className={st.body + ' ' + st.color} src={fostering}/>
    );
};

export default SubNavFostering;