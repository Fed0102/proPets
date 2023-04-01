import React from 'react';
import style from './preview.module.css';
import {db} from "../../../firebase/firebase-config";
import {addDoc, collection} from "firebase/firestore";
import paw from '../../../assets/png/paw.png';
import {useSelector} from "react-redux";
import avatar from "../../../assets/png/avatar.jpg";
import edit from '../../../assets/png/edit.png';
import facebook from '../../../assets/png/facebook.png';
import phone from '../../../assets/png/phone.png';
import email from '../../../assets/png/email.png';
import {Link} from "react-router-dom";
import {lostForm} from "../../../router/paths";


const PreviewLostFoundForm = () => {

    const form = useSelector(state => state.form);

    const addBase = () => {
        try {
            addDoc(collection(db, "post"), {
                typeAnimal: form.typeAnimal,
                sex: form.sex,
                breed: form.breed,
                color: form.color,
                location: form.location,
                height: form.height,
                description: form.description,
                features: form.features,
                phone: form.phone,
                email: form.email,
                facebook: form.facebook,
                date: Date.now(),
            }).then(() => console.log('OK'))
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column align-items-center overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold} ${style.postCardTitle}`}><span className={`${style.titleBold}`}>Preview and Publish. </span>Please
                share the post to your FB to be more effective</h1>
            <div className={`${style.postCard} d-flex`}>
                <div className={`col-5`}>
                    <img className={`${style.imgPreview}`} src={'image'} alt={'image'}/>
                </div>
                <div className={`col-7 ps-3 pe-3`}>
                    <span className={`${style.titleBigBold}`}>{form.typeAnimal}, {form.breed}</span>
                    <div className={`d-flex`}>
                        <div className={`col-6`}>
                            <h2 className={`${style.smallerTextGreen}`}>Color: <span
                                className={`${style.smallerTextBlack}`}>{form.color}</span></h2>
                            <h2 className={`${style.smallerTextGreen}`}>Sex: <span
                                className={`${style.smallerTextBlack}`}>{form.sex}</span></h2>
                            <h2 className={`${style.smallerTextGreen}`}>Height: <span
                                className={`${style.smallerTextBlack}`}>{form.height}</span></h2>
                        </div>
                        <div className={`col-6`}>
                            <h2 className={`${style.smallerTextGreen}`}>Distinctive features <span
                                className={`${style.smallerTextBlack}`}>{form.features}</span></h2>
                        </div>
                    </div>
                    <div>
                        <h2 className={`${style.smallerTextGreen}`}>Description: <span
                            className={`${style.smallerTextBlack}`}>{form.description}</span></h2>
                    </div>
                    <hr className={`mt-3 mb-0`}/>
                    <div className={`mb-2`}>
                        <span className={`${style.smallerTextBlack}`}>{form.location}</span>
                    </div>
                    <div className={`d-flex`}>
                        <div className={`${style.avatarImg} col-1`}>
                            <img src={avatar} alt={'avatar'}/>
                        </div>
                        <div className={`d-flex flex-column col-7 ps-3`}>
                            <div>
                                <span className={`${style.titleSemiBoldGreen}`}>{form.name}</span>
                            </div>
                            <div>
                                <span className={`${style.smallerTextBlack}`}>{new Date(form.date).toDateString()}</span>
                            </div>
                        </div>
                        <div className={`col-4 d-flex justify-content-evenly align-items-center`}>
                            <a href={`tel: ${form.phone}`}><img className={`${style.contactsBtn}`} src={phone}
                                                                          alt={''}/></a>
                            <a href={`https://${form.facebook}`} target={'_blank'}><img
                                className={`${style.contactsBtnFb}`} src={facebook} alt={''}/></a>
                            <a href={`mailto: ${form.email}`}><img className={`${style.contactsBtn} mt-1`}
                                                                             src={email} alt={''}/></a></div>
                    </div>
                </div>
            </div>
            <span className={`${style.titleSemiBoldGreen} ${style.postCardTitle}`}>Fingers crossed. We wish your fluffy to be found as soon as possible. Your post will expire in two weeks. To make it active again follow the instructions you’ll get in email.</span>
            <div className={`${style.postCardTitle} d-flex justify-content-between`}>
                <span className={`${style.smallerTextBlack} ps-1`}>Share to Facebook</span>
                <div className={'d-flex'}>
                    <Link to={lostForm} className={`${style.btnEdit} me-2`}>
                        <img className={`${style.editIcon}`} src={edit} alt={'edit'}/>
                        <span className={'m-auto'}>Edit</span>
                    </Link>
                    <button className={`${style.btnHeader}`} onClick={() => addBase()}>
                        <img className={`${style.iconBtnBlack}`} src={paw} alt={''}/>
                        <span className={'m-auto'}>Publish</span>
                    </button>
                </div>
            </div>
            <span className={`${style.littleGreyText} ${style.postCardTitle} text-end`}>By clicking “Publish”, you agree to us processing your information in accordance with these terms.</span>
        </div>
    );
};


export default PreviewLostFoundForm;