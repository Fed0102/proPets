import React from 'react';
import st from './block.module.css'
import MyMap from "./map/MyMap";
// import MyAdvertising from "./advertising/MyAdvertising";

const MyBlock = () => {
    return (
        <div className={st.base}>
            <MyMap/>
            {/*<MyAdvertising/>*/}
        </div>
    );
};

export default MyBlock;