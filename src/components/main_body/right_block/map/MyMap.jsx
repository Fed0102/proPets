import React from 'react';
import style from "./map.module.css";
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import Loader from "../../../UI/loader/Loader";

const Map = () => {

<<<<<<< Updated upstream
    const {isLoaded} = useLoadScript(
        {googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})
=======
    // const {} = useLoadScript(
    //     {googleMapsApiKey: "AIzaSyDldgB09sGhpzX757lYVxqOCWg-aX8lXQw"})
>>>>>>> Stashed changes


    if (!isLoaded)
        return <div><Loader/></div>;
    return (
        <div className={`${style.parDiv}`}>
            <div className={`d-flex flex-column pb-2`}>
                <input placeholder=' Location' className={style.searchInput}/>
            </div>
            <div className={style.blockMap}>
                <div>
                    <GoogleMap zoom={10} center={{lat: 31.801447, lng: 34.643497}}
                               mapContainerClassName={style.mapContainer}></GoogleMap>
                </div>
            </div>
        </div>
    );


};

export default Map;