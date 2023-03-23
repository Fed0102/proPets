import React from 'react';
import found from "../../../../assets/png/found.png";
import st from "./head_btns_icons.module.css"

const HeadFound = () => {
    return (
        <img className={st.body + ' ' + st.found} src={found}/>
    );
};

export default HeadFound;