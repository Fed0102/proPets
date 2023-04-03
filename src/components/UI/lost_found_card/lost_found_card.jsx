import React from 'react';
import style from "./lost_found_card.module.css";
import map_marker from "../../../assets/png/map-marker.png";
import phone from "../../../assets/png/phone.png";
import facebook from "../../../assets/png/facebook.png";
import email from "../../../assets/png/email.png";
import avatar from "../../../assets/png/avatar.jpg";
import Avatar from "../avatar/avatar";
import deer from "../../../assets/png/lost_olenenok.jpeg";
// import tigra from "../../../assets/png/tigra.jpg";

const LostCard = ({lostFoundPost}) => {

    return (
        <div className={style.mainDiv}>
            <div className={style.widthImgDiv}>
                <img className={style.imgHeight} src={deer} alt={'avatar'}/>
            </div>
            <div className={`ms-3`}>
                <span className={`${style.titleBigBold}`}>{lostFoundPost.typeAnimal} , {lostFoundPost.breed}</span>
                <div className={`d-flex`}>
                    <div>
                        <h2 className={`${style.smallTextGreen}`}>Color: <span
                            className={`${style.smallTextBlack}`}>{lostFoundPost.color}</span></h2>
                        <h2 className={`${style.smallTextGreen}`}>Sex: <span
                            className={`${style.smallTextBlack}`}>{lostFoundPost.sex}</span></h2>
                        <h2 className={`${style.smallTextGreen}`}>Height: <span
                            className={`${style.smallTextBlack}`}>{lostFoundPost.height}</span></h2>
                    </div>
                    <div className={`ps-4`}>
                        <h2 className={`${style.smallTextGreen}`}>Distinctive features: <span
                            className={`${style.smallTextBlack}`}>{lostFoundPost.features}</span></h2>
                    </div>
                </div>
                <div>
                    <h2 className={`${style.smallTextGreen}`}>Description: <span
                        className={`${style.smallTextBlack}`}>{lostFoundPost.description}</span></h2>
                </div>
                <hr/>
                <div className={`mb-2`}>
                    <img className={`${style.mapMarker}`} src={map_marker} alt={''}/>
                    <span className={`${style.smallTextBlack}`}>{lostFoundPost.location}</span>
                </div>
                <div className={`d-flex justify-content-between`}>
                    <div className={`d-flex`}>
                        <div>
                            <Avatar/>
                        </div>
                        <div>
                            <div>
                                <span className={`${style.titleSemiBoldGreen}`}>Ally</span></div>
                            <div>
                            <span
                                className={`${style.smallTextBlack}`}>{new Date(lostFoundPost.date).toISOString().slice(0, 10)} {new Date(lostFoundPost.date + 10800000).toISOString().slice(11, 16)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-evenly`}>
                        <a className={style.a} href={'#'}><img className={style.contactsBtn} src={phone} alt={'phone'}/></a>
                        <a className={style.a} href={'#'}><img className={style.contactsBtn} src={facebook} alt={'facebook'}/></a>
                        <a className={style.a} href={'#'}><img className={style.contactsBtn} src={email} alt={'email'}/></a>
                    </div>
                </div>
            </div>
        </div>
        // <div className={style.mainDiv}>
        //     <div className={`${style.postCard} d-flex`}>
        //         <div className={style.widthImgDiv}>
        //             <img className={style.imgHeight} src={tigra} alt={'avatar'}/>
        //         </div>
        //         <div className={`col-7`}>
        //             <span className={`${style.titleBigBold}`}>{lostFoundPost.typeAnimal} , {lostFoundPost.breed}</span>
        //             <div className={`d-flex`}>
        //                 <div className={`col-6`}>
        //                     <h2 className={`${style.smallTextGreen}`}>Color: <span
        //                         className={`${style.smallTextBlack}`}>{lostFoundPost.color}</span></h2>
        //                     <h2 className={`${style.smallTextGreen}`}>Sex: <span
        //                         className={`${style.smallTextBlack}`}>{lostFoundPost.sex}</span></h2>
        //                     <h2 className={`${style.smallTextGreen}`}>Height: <span
        //                         className={`${style.smallTextBlack}`}>{lostFoundPost.height}</span></h2>
        //                 </div>
        //                 <div className={`col-6`}>
        //                     <h2 className={`${style.smallTextGreen}`}>Distinctive features <span
        //                         className={`${style.smallTextBlack}`}>{lostFoundPost.features}</span></h2>
        //                 </div>
        //             </div>
        //             <div>
        //                 <h2 className={`${style.smallTextGreen}`}>Description: <span
        //                     className={`${style.smallTextBlack}`}>{lostFoundPost.description}</span></h2>
        //             </div>
        //             <hr className={`mt-3 mb-0`}/>
        //             <div className={`mb-2`}>
        //                 <img className={`${style.mapMarker}`} src={map_marker} alt={''}/>
        //                 <span className={`${style.smallTextBlack}`}>{lostFoundPost.location}</span>
        //             </div>
        //             <div className={`d-flex justify-content-between`}>
        //                 <div className={`d-flex`}>
        //                     <div className={`${style.avatarImg}`}>
        //                         <Avatar/>
        //                     </div>
        //                     <div className={`d-flex flex-column ps-2`}>
        //                         <div>
        //                             <span className={`${style.titleSemiBoldGreen}`}>Ally</span>
        //                         </div>
        //                         <div>
        //                             <span
        //                                 className={`${style.smallTextBlack}`}>{new Date(lostFoundPost.date).toTimeString().slice(0, 8)}</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className={`col-4 d-flex justify-content-evenly`}>
        //                     <a href={'#'}><img className={`${style.contactsBtn}`} src={phone} alt={'phone'}/></a>
        //                     <a href={'#'}><img className={`${style.contactsBtn}`} src={facebook} alt={'facebook'}/></a>
        //                     <a href={'#'}><img className={`${style.contactsBtn}`} src={email} alt={'email'}/></a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default LostCard;