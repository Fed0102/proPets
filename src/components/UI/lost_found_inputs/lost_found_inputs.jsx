import React from 'react';
import style from "./lost_found_inputs.module.css";

const LostInputs = () => {
    return (
        <div className={`d-flex`}>
            <input type="text" placeholder={' Type'} className={`${style.searchInput} ${style.smallInput}`}/>
            <input type="text" placeholder={' Breed'} className={`${style.searchInput} ${style.smallInput}`}/>
            <input type="text" placeholder={' Features'} className={`${style.searchInput} ${style.bigInput}`}/>
        </div>
    );
};

export default LostInputs;