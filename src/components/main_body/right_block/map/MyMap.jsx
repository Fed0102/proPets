import React from 'react';
import style from "./map.module.css";

const Map = () => {
    return (
        <div className={style.parDiv}>
            <div className={`d-flex flex-column pb-2 pt-2`}>
                <input placeholder=' Location' className={style.searchInput}/>
            </div>
            <div className={style.blockMap}>
                <div>
                    Map
                </div>
            </div>
        </div>
    );
};

export default Map;