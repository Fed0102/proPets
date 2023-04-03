import React, {useState} from 'react';
import style from './post_form.module.css';
import arrowUp from '../../../assets/png/arrow-up.png';
import paw from '../../../assets/png/paw.png';
import avatar from '../../../assets/png/avatar.jpg';
import dog from '../../../assets/png/dog.png';
import {db} from "../../../firebase/firebase-config";
import {addDoc, collection} from "firebase/firestore";
import {Link} from "react-router-dom";
import {
    fostering,
    homePage,
    hotels,
    newPostFostering,
    newPostHome,
    newPostHotels, newPostVetHelp,
    newPostWalking, vetHelp,
    walking
} from "../../../router/paths";
import {useWindowPath} from "../../../hooks/useWindowPath";
import Avatar from "../../UI/avatar/avatar";

const MyPostForm = () => {

    const [body, setBody] = useState();

    const path = useWindowPath();

    const choosePath = () => {
        if (path === newPostHome)
            return homePage;
        else if (path === newPostHotels)
            return hotels;
        else if (path === newPostWalking)
            return walking;
        else if (path === newPostFostering)
            return fostering;
        else if (path === newPostVetHelp)
            return vetHelp;
    }

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const addBase = () => {
        try {
            addDoc(collection(db, "post"), {
                name: userInfo.name,
                photo: userInfo.photo,
                active: true,
                uid: userInfo.uid,
                postType: choosePath().substring(1),
                body: body,
                date: Date.now(),
                // Images: images,
            }).then(r => console.log(r));
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column`}>
            <h1 className={`${style.titleSemiBold}`}><span className={`${style.titleBold}`}>Your new post!</span> Simply
                text, add photos and publish.</h1>
            <div className={`${style.postCard} row d-flex`}>
                <div className={`d-flex`}>
                    <div className={`${style.smallerTextBlack} text-end`}>
                        <label className={style.smallerText} htmlFor="text">Text:</label>
                        <p className={`${style.littleGreenText}`}>up to 1500 char</p>
                    </div>
                    <textarea className={`ms-2 ${style.smallerTextBlack} ${style.biggestTextarea}`} name={'text'}
                              onChange={e => setBody(e.target.value)}
                              placeholder={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores cupiditate debitis enim eum eveniet excepturi id mollitia tempore! Alias aliquid architecto aspernatur doloribus enim molestias nihil perspiciatis provident repudiandae vero? At, atque aut dignissimos dolor error ex laudantium modi nemo odit officiis praesentium recusandae repellendus, sapiente totam unde vitae!`}
                    />
                </div>
                <div className={`${style.afterBigTextArea} d-flex mb-1 mt-2`}>
                    <div className={`${style.smallerTextBlack} text-end`}>
                        <label className={style.smallerText} htmlFor="text">Photos:</label>
                        <p className={`${style.littleGreenText}`}>up to 4 images</p>
                    </div>
                    <div className={`${style.divTwo} d-flex`}>
                        <div className={`col-5 row d-flex flex-wrap justify-content-center align-items-center`}>
                            <div className={`overflow-hidden text-center`}>
                                <img className={style.imgAvatar} src={avatar} alt={'avatar'}/>
                            </div>
                        </div>
                        <div className={`col-4 text-center`}>
                            <img className={`${style.addFileIcon}`} src={arrowUp} alt={''}/>
                            <p>Drag and drop<br/> photos or</p>
                            <label className={`${style.addFileLabel}`} htmlFor={'fileInput'}>Browse</label>
                        </div>
                        <div className={`${style.divInput}  mb-3`}>
                            <input className={`${style.addFileInput}`} type={'file'} id={'fileInput'}
                                   name={'fileInput'} multiple accept={'image/*, image/jpeg'}/>
                        </div>
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
                        <Link to={choosePath()} className={`${style.btnHeader}`} onClick={() => addBase()}>
                            <img className={`${style.iconBtnBlack}`} src={paw} alt={'paw'}/>
                            <span className={''}>Publish</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostForm;