import React from 'react';
import plus from "../../../../assets/png/plus.png";
import st from "./head_btns_icons.module.css"

const HeadPlus = () => {
    return (
        <img className={st.body} src={plus}/>
    );
};

export default HeadPlus;