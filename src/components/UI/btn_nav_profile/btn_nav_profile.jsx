import React from 'react';
import st from './btn_nav_profile.module.css'

const BtnNavPrfl = ({children}) => {
    return (
        <div className={st.base}>
            <div className={st.normal}>
                {children}
            </div>
        </div>
    );
};

export default BtnNavPrfl;