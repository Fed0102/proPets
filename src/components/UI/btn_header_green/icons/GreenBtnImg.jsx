import React from 'react';
import st from "./green_btns_icons.module.css"

const GreenBtnImg = ({yellow, imgPath}) => {
    return (
        <img className={yellow ? `${st.body} ${st.found}` : st.body} src={imgPath} alt={'imgPath'}/>
    );
};

export default GreenBtnImg;