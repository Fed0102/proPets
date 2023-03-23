import React from 'react';
import animals from "../../../../assets/png/animals.png";
import style from'./start_three.module.css'

const StartThree = () => {
    return (
        <section className={`container-fluid`}>
            <div className={'row justify-content-center mb-5'}>
                <div className={'d-flex col-12 flex-wrap justify-content-center'}>
                    <div className={`d-flex justify-content-center`}>
                        <img src={animals} alt="animals"/>
                    </div>
                    <div className={`pt-5`}>
                        <h2 className={`${style.sizeH2} pb-3`}>Here is collected everything that your pet needs:</h2>
                        <ul className={`${style.sizeUl}`}>
                            <li className={`${style.sizeLi}`}>professional veterinarian tips </li>
                            <li className={`${style.sizeLi}`}>useful information about education and care;</li>
                            <li className={`${style.sizeLi}`}>fostering home search;</li>
                            <li className={`${style.sizeLi}`}>information about pet-sitting and walking service; </li>
                            <li className={`${style.sizeLi}`}>and of course, great communication with new friends in your social network!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartThree;