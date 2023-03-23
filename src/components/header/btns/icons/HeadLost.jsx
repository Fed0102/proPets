import React from 'react';
import lost from "../../../../assets/png/lost.png";
import st from "./head_btns_icons.module.css"

const HeadLost = () => {
    return (
        <img className={st.body} src={lost}/>
    );
};

export default HeadLost;