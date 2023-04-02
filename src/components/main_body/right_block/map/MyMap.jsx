import React from 'react';
import style from "./map.module.css";
import {useLoadScript} from "@react-google-maps/api";

const Map = () => {

    const {} = useLoadScript(
        {googleMapsApiKey: "AIzaSyDldgB09sGhpzX757lYVxqOCWg-aX8lXQw"})

    return (
        <div className={`${style.parDiv}`}>
            <div className={`d-flex flex-column pb-2`}>
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