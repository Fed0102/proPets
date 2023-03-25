import React from 'react';
import love from "../../../../assets/png/love.png";
import style from './start_four.module.css';

const StartFour = () => {
    return (
        <section className={style.section}>
            <div className={`${style.colorSection}`}>
                <div>
                    <p className={`${style.aboutStyle}`}>Coming soon</p>
                </div>

                <div className={style.openService}>
                    <p className={`${style.textStyle}`}>We are planing to open a new service,<br/> where your
                        cats and dogs can find their love!</p>
                </div>
                <div className={`${style.logoLove} col-3`}>
                    <img src={love} alt="love"/>
                    <p className={`${style.pLove}`}>LOVE</p>
                </div>
            </div>
        </section>
    );
};

export default StartFour;