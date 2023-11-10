import React from 'react';
import logo from "../../../../assets/svg/logo.svg";
import facebook from "../../../../assets/png/facebook.png";
import instagram from "../../../../assets/png/87390.png";
import lost from "../../../../assets/png/lost.png";
import found from "../../../../assets/png/found.png";
import vetHelp from "../../../../assets/png/vetHelp.png";
import hotels from "../../../../assets/png/hotels.png";
import walking from "../../../../assets/png/walking.png";
import fostering from "../../../../assets/png/fostering.png";
import style from './start_footer.module.css';

const StartFooter = () => {
    const clickAlert = e => {
        e.preventDefault()
        alert('Please, sign in or sign up first!')

    }
    return (
        <footer>
            <div className={`${style.heightFooter}`}>
                <div className={`${style.justifyContent} d-flex align-items-center flex-wrap`}>
                    <div>
                        <img className={`${style.footerLogo}`} src={logo} alt="logo"/>
                    </div>
                    <div className={`${style.widthSocial}`}>
                        <div>
                            <img className={`${style.imgFb} m-2`} src={facebook} alt='facebook'/>
                            <img className={`${style.imgInst} m-2`} src={instagram} alt='instagram'/>
                        </div>
                        <div>
                            <p className={`${style.colorWhite} ${style.smallerText}`}>
                                1600 Amphitheatre Pkwy<br/> Mountain View, CA 94043, USA
                            </p>
                        </div>
                    </div>
                    <div className={`${style.widthLinks}`}>
                        <div className={`${style.heightLinks} row g-2`} onClick={clickAlert}>
                            <div className={`col-1 d-flex flex-column justify-content-between m-1 ps-3`}>
                                <img className={`${style.imgSize}`} src={lost} alt='lost'/>
                                <img className={`${style.imgSize}`} src={found} alt='found'/>
                                <img className={`${style.imgSize}`} src={vetHelp} alt='vetHelp'/>
                            </div>
                            <div className={`col-4 d-flex flex-column justify-content-between m-0 ps-3`}>
                                <span className={`${style.colorWhite}`}>Lost</span>
                                <span className={`${style.colorWhite}`}>Found</span>
                                <span className={`${style.colorWhite}`}>VetHelp</span>
                            </div>
                            <div className={`col-1 d-flex flex-column justify-content-between m-1 ps-3`}>
                                <img className={`${style.imgSize}`} src={hotels} alt='hotels'/>
                                <img className={`${style.imgSize}`} src={walking} alt='walking'/>
                                <img className={`${style.imgSize}`} src={fostering} alt='fostering'/>
                            </div>
                            <div className={`col-4 d-flex flex-column justify-content-between m-0 ps-3`}>
                                <span className={`${style.colorWhite}`}>Hotels</span>
                                <span className={`${style.colorWhite}`}>Walking</span>
                                <span className={`${style.colorWhite}`}>Fostering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default StartFooter;