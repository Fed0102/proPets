import React from 'react';
import plus from "../../../../assets/png/plus.png";
import st from "./green_btns_icons.module.css"

const GreenBtnImg = ({yellow, imgPath}) => {
    return (
        <img className={yellow ? `${st.body} ${st.found}` : st.body} src={imgPath}/>
    );
};

export default GreenBtnImg;