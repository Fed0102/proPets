import React from 'react';
import st from './btn_nav_profile.module.css'

const BtnNavPrfl = ({children}) => {
    return (
        <div className={st.base}>
            <button className={st.normal}>
                {children}
            </button>
        </div>
    );
};

export default BtnNavPrfl;