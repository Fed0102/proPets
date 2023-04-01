import React from 'react';
import style from './loader.module.css';

const Loader = () => {
    return (
        <div style={{marginTop: 200, display: 'flex', justifyContent: 'center'}}>
            <span className={style.loader}>Loading</span>
        </div>
    );
};

export default Loader;