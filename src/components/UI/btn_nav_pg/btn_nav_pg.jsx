import React from 'react';
import st from './btn_nav_pg.module.css'

const BtnNavPg = ({children}) => {
    return (
        <div className={st.base}>
            <button className={st.normal}>
                {children}
            </button>
        </div>
    );
};

export default BtnNavPg;