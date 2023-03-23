import React from 'react';
import st from './page.module.css'

const MyPage = ({children}) => {
    return (
        <div className={st.base}>
            {children}
        </div>
    );
};

export default MyPage;