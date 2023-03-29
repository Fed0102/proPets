import React from 'react';
import st from './sub_nav.module.css'

const MySubNav = ({children}) => {
    return (
        <div className={st.base}>
            {children}
        </div>
    );
};

export default MySubNav;