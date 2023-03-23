import React from 'react';
import style from "./lost_found_card.module.css";
import map_marker from "../../../assets/png/map-marker.png";
import phone from "../../../assets/png/phone.png";
import facebook from "../../../assets/png/facebook.png";
import email from "../../../assets/png/email.png";

const LostCard = () => {
    return (
        <div>
            <div className={`${style.postCard} d-flex`}>
                <div className={`col-5`}>
                    <img src={'user'} alt={'user'}/>
                </div>
                <div className={`col-7`}>
                    <span className={`${style.titleBigBold}`}>Type, Breed</span>
                    <div className={`d-flex`}>
                        <div className={`col-6`}>
                            <h2 className={`${style.smallTextGreen}`}>Color: <span
                                className={`${style.smallTextBlack}`}>Color</span></h2>
                            <h2 className={`${style.smallTextGreen}`}>Sex: <span
                                className={`${style.smallTextBlack}`}>Sex</span></h2>
                            <h2 className={`${style.smallTextGreen}`}>Height: <span
                                className={`${style.smallTextBlack}`}>Height</span></h2>
                        </div>
                        <div className={`col-6`}>
                            <h2 className={`${style.smallTextGreen}`}>Distinctive features <span
                                className={`${style.smallTextBlack}`}>Features</span></h2>
                        </div>
                    </div>
                    <div>
                        <h2 className={`${style.smallTextGreen}`}>Description: <span
                            className={`${style.smallTextBlack}`}>Description</span></h2>
                    </div>
                    <hr className={`mt-3 mb-0`}/>
                    <div className={`mb-2`}>
                        <img className={`${style.mapMarker}`} src={map_marker} alt={''}/>
                        <span className={`${style.smallTextBlack}`}>Location</span>
                    </div>
                    <div className={`d-flex`}>
                        <div className={`${style.avatarImg} col-1`}>
                            <img src={'avatar'} alt={'avatar'}/>
                        </div>
                        <div className={`d-flex flex-column col-7 ps-3`}>
                            <div>
                                <span className={`${style.titleSemiBoldGreen}`}>Name</span>
                            </div>
                            <div>
                                <span className={`${style.smallTextBlack}`}>dateString</span>
                            </div>
                        </div>
                        <div className={`col-4 d-flex justify-content-evenly`}>
                            <a href={'#'}><img className={`${style.contactsBtn}`} src={phone} alt={'phone'}/></a>
                            <a href={'#'}><img className={`${style.contactsBtn}`} src={facebook} alt={'facebook'}/></a>
                            <a href={'#'}><img className={`${style.contactsBtn}`} src={email} alt={'email'}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LostCard;