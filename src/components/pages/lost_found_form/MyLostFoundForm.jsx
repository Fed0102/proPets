import React, {useState} from 'react';
import style from './lost_found_form.module.css';
import form from '../../../assets/png/anketa.png';
import paw from '../../../assets/png/paw.png';
import arrowUp from '../../../assets/png/arrow-up.png';
import {useDispatch} from "react-redux";
import {SET_FORM_INFO} from "../../../store/lostFoundFormReducer";
import {Link} from "react-router-dom";
import {foundForm, lostForm, previewFound, previewLost} from "../../../router/paths";
import {useWindowPath} from "../../../hooks/useWindowPath";
import Avatar from "../../UI/avatar/avatar";

const LostFoundForm = () => {

    const [typeAnimal, setTypeAnimal] = useState('')
    const [sex, setSex] = useState('');
    const [breed, setBreed] = useState('');
    const [color, setColor] = useState('');
    const [height, setHeight] = useState('');
    const [features, setFeatures] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [facebook, setFacebook] = useState('');
    const dispatch = useDispatch();

    const path = useWindowPath();
    const lostOrFound = () => {
        if (path === lostForm) {
            return previewLost;
        } else if (path === foundForm) {
            return previewFound;
        }
    }

    const lostOrFoundText = () => {
        if (path === lostForm)
            return (
                <h1 className={`${style.titleSemiBold}`}>
                    <span className={`${style.titleBold}`}>Lost your buddy? </span>
                    Keep calm and complete the form.
                </h1>
            )
        else
            return (
                <h1 className={`${style.titleSemiBold}`}>
                    <span className={`${style.titleBold}`}>Found a pet? </span>
                    Please complete the form to help.
                </h1>
            )
    }

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    return (
        <div className={'d-flex'}>
            <div className={`${style.mainDiv} d-flex flex-column`}>
                {lostOrFoundText()}
                <div className={`${style.lostFoundForm} row d-flex`}>
                    <div className={'col-6 d-flex flex-column'}>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="type">Type:</label>
                            <input className={`ms-2`} placeholder="Dog" type="text" name={"type"} onChange={e => setTypeAnimal(e.target.value)}/>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="sex">Sex:</label>
                            <select defaultValue={'Choose'} className={`${style.select} ms-2`} name={"sex"}
                                    onChange={e => setSex(e.target.value)}>
                                <option value={'Male'}>Male</option>
                                <option value={'Female'}>Female</option>
                            </select>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="breed">Breed:</label>
                            <input className={`ms-2`} type="text" placeholder="Golden Retriever" name="breed"
                                   onChange={e => setBreed(e.target.value)}/>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="color">Color:</label>
                            <input className={`ms-2`} type="text" placeholder="Beige" name="color"
                                   onChange={e => setColor(e.target.value)}/>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`}
                                   htmlFor="height">Height:</label>
                            <select defaultValue={'Choose'} className={`${style.select} ms-2`} name={"height"}
                                    onChange={e => setHeight(e.target.value)}>
                                <option value={'45-70 cm'}>45-70 cm</option>
                                <option value={'20-45 cm'}>20-45 cm</option>
                                <option value={'0-20 cm'}>0-20 cm</option>
                            </select>
                        </div>
                        <div className={`d-flex mb-1`}>
                            <div className={`${style.smallerTextBlack} col-3 text-end`}>
                                <label htmlFor="features">Distinctive features:</label>
                                <p className={`${style.littleGreenText}`}>up to 60 char</p>
                            </div>
                            <textarea className={`ms-2 ${style.smallerTextBlack} ${style.smallTextarea}`} cols={17}
                                      rows={3} name={'features'}
                                      placeholder={'blue collar with stars, no left ear, damaged tail.'}
                                      onChange={e => setFeatures(e.target.value)}/>
                        </div>
                        <div className={`d-flex mb-1`}>
                            <div className={`${style.smallerTextBlack} col-3 text-end`}>
                                <label htmlFor="description">Description:</label>
                                <p className={`${style.littleGreenText}`}>up to 150 char</p>
                            </div>
                            <textarea className={`ms-2 ${style.smallerTextBlack} ${style.bigTextarea}`} cols={17}
                                      rows={6} name={'description'}
                                      placeholder={'brown fox jumps over a lazy dog. DJs flock by when ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'}
                                      onChange={e => setDescription(e.target.value)}/>
                        </div>
                        <div className={`d-flex mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`}
                                   htmlFor='location'>Location:</label>
                            <div>
                             <textarea className={`ms-2 ${style.smallerTextBlack} ${style.middleTextarea}`}
                                       placeholder='Florentin Street, Tel Aviv' name='location'
                                       onChange={e => setLocation(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className={'col-6 text-center'}>
                        <img className={`${style.formImg}`} src={form} alt={''}/>
                        <hr className={`${style.hrLine}`}/>
                        <div className={`d-flex row mt-5`}>
                            <div className={`col-6 text-center`}>
                                <img className={`${style.addFileIcon}`} src={arrowUp} alt={'arrowUp'}/>
                                <p className={`${style.smallerTextBlack}`}>Drag and drop<br/> photos or</p>
                                <label className={`${style.addFileLabel}`} htmlFor={'fileInput'}>Browse</label>
                            </div>
                            <div className={`col-6 mb-3`}>
                                <input className={`${style.addFileInput}`} placeholder={`img1.jpg img1.jpg img1.jpg`}/>
                            </div>
                        </div>
                    </div>
                    <hr className={`${style.hrLine}`}/>
                    <div className={`mb-3 mt-3`}>
                        <div className={`mb-1 row`}>
                            <label className={`${style.smallerTextBlack} col-2 text-end`}
                                   htmlFor="contacts">Contacts:</label>
                            <input className={`${style.input} col-3`} type="tel" placeholder={userInfo.phone}
                                   // onChange={e => setPhone(e.target.value)}/>
                            onChange={e => setPhone(e.target.value)}/>
                            <input className={`${style.input} col-3`} type="email" placeholder={userInfo.email}
                                   onChange={e => setEmail(e.target.value)}/>
                            <input className={`${style.input} col-3`} type="text" placeholder={userInfo.facebook}
                                   onChange={e => setFacebook(e.target.value)}/>
                        </div>
                    </div>
                    <div className={`row d-flex align-items-center mb-1 mt-1`}>
                        <div className={`col-1`}>
                            <Avatar photo={userInfo.photo}/>
                        </div>
                        <div className={`col-8 ps-4`}>
                            <h3 className={`${style.titleSemiBoldGreen}`}>{userInfo.name}</h3>
                        </div>
                        <div className={`col-3`}>
                            <Link to={lostOrFound()} className={`${style.btnHeader}`} onClick={() => {
                                dispatch({
                                    type: SET_FORM_INFO, payload: {
                                        typeAnimal: typeAnimal,
                                        sex: sex,
                                        breed: breed,
                                        color: color,
                                        height: height,
                                        features: features,
                                        description: description,
                                        location: location,
                                        phone: phone,
                                        email: email,
                                        facebook: facebook,
                                        date: Date.now()
                                    }
                                })
                            }
                            }>
                                <img className={`${style.iconBtnBlack}`} src={paw} alt={''}/>
                                <span className={'m-auto'}>Publish</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LostFoundForm;