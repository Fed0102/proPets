import React from 'react';
import st from './block.module.css';
import MyMap from "./map/MyMap";
import {useWindowPath} from "../../../hooks/useWindowPath";
import {favorites, fostering, found, homePage, hotels, lost, vetHelp, walking} from "../../../router/paths";
import MyAdvertising from "./advertising/MyAdvertising";


const MyBlock = () => {

    const path = useWindowPath();

    const mapOrAdvice = () => {
        if (path === lost || path === found)
            return <MyMap/>
        else if (path === homePage || path === hotels || path === walking || path === fostering || path === vetHelp ||path === favorites)
            return <MyAdvertising/>
    }

    return (
        <div className={st.base}>
            {mapOrAdvice()}
        </div>
    );
};

export default MyBlock;