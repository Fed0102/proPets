import React from 'react';
import style from "./lost_found_card.module.css";
import map_marker from "../../../assets/png/map-marker.png";
import phone from "../../../assets/png/phone.png";
import facebook from "../../../assets/png/facebook.png";
import email from "../../../assets/png/email.png";
import avatar from "../../../assets/png/avatar.jpg";
import Avatar from "../avatar/avatar";
const LostCard = ({lostFoundPost}) => {

    //     phone: form.phone,
    //     email: form.email,
    //     facebook: form.facebook,
    //     data: Date.now(),

    return (
        <div className={style.mainDiv}>
            <div className={`${style.postCard} d-flex`}>
                <div className={style.widthImgDiv}>
                    <img src={avatar} alt={'avatar'}/>
                </div>
                <div className={`col-7`}>
                    <span className={`${style.titleBigBold}`}>{lostFoundPost.type},{lostFoundPost.breed}</span>
                    <div className={`d-flex`}>
                        <div className={`col-6`}>
                            <h2 className={`${style.smallTextGreen}`}>Color: <span
                                className={`${style.smallTextBlack}`}>{lostFoundPost.color}</span></h2>
                            <h2 className={`${style.smallTextGreen}`}>Sex: <span
                                className={`${style.smallTextBlack}`}>{lostFoundPost.sex}</span></h2>
                            <h2 className={`${style.smallTextGreen}`}>Height: <span
                                className={`${style.smallTextBlack}`}>{lostFoundPost.height}</span></h2>
                        </div>
                        <div className={`col-6`}>
                            <h2 className={`${style.smallTextGreen}`}>Distinctive features <span
                                className={`${style.smallTextBlack}`}>{lostFoundPost.features}</span></h2>
                        </div>
                    </div>
                    <div>
                        <h2 className={`${style.smallTextGreen}`}>Description: <span
                            className={`${style.smallTextBlack}`}>{lostFoundPost.description}</span></h2>
                    </div>
                    <hr className={`mt-3 mb-0`}/>
                    <div className={`mb-2`}>
                        <img className={`${style.mapMarker}`} src={map_marker} alt={''}/>
                        <span className={`${style.smallTextBlack}`}>{lostFoundPost.location}</span>
                    </div>
                    <div className={`d-flex`}>
                        <div className={`${style.avatarImg} col-1`}>
                            <Avatar/>
                        </div>
                        <div className={`d-flex flex-column col-7 ps-3`}>
                            <div>
                                <span className={`${style.titleSemiBoldGreen}`}>Name</span>
                            </div>
                            <div>
                                <span className={`${style.smallTextBlack}`}>{new Date(lostFoundPost.date).toTimeString()}}</span>
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