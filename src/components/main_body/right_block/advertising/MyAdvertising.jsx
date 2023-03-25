import React from 'react';
import style from "./advertising.module.css";
import dental_care from "../../../../assets/png/dental_care.png";
import pet_hotel from "../../../../assets/png/pet_hotel.png";
import pet_hotel_2 from "../../../../assets/png/pet_hotel_2.png";

const LostAdvertising = () => {
    return (
        <div className={`d-flex flex-column`}>
            <img className={`${style.dental_care} ms-3 mt-3`} src={dental_care} alt={'dental_care'}/>
            <img className={`${style.pet_hotel} ms-3 mt-3`} src={pet_hotel} alt={'pet_hotel'}/>
            <img className={`${style.pet_hotel_2} ms-3 mt-3`} src={pet_hotel_2} alt={'pet_hotel_2'}/>
        </div>
    );
};

export default LostAdvertising;