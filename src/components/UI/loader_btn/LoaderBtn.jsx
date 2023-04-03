import React from 'react';
import st from "./loader_btn.module.css";

const LoaderBtn = () => {
    return (
        <div className={`${st.wrapper}`}>
            <div className={`${st.cf}`}>
                <div className={`${st.timer}`}/>
            </div>
        </div>
    );
};

export default LoaderBtn;