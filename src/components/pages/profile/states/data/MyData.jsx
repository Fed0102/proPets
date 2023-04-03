import React, {useState} from 'react';
import st from './data.module.css'
import Avatar from "../../../../UI/avatar/avatar";
import camera from "../../../../../assets/png/camera.png"
import BtnHeaderWhite from "../../../../UI/btn_header_white/btn_header_white";
import BtnHeaderGreen from "../../../../UI/btn_header_green/btn_header_green";
import GreenBtnImg from "../../../../UI/btn_header_green/icons/GreenBtnImg";
import save from '../../../../../assets/png/save.png'
import {updateProfile, updateEmail} from "firebase/auth";
import {auth, db, storage} from "../../../../../firebase/firebase-config";
import {doc, updateDoc} from "firebase/firestore";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {v4} from "uuid";

const MyData = () => {

    let user = localStorage.getItem('userInfo');
    let initial = JSON.parse(user);
    const [nameInp, setNameInp] = useState(initial.name);
    const [photoInp, setPhotoInp] = useState(initial.photo);
    const [emailInp, setEmailInp] = useState(initial.email);
    const [phoneInp, setPhoneInp] = useState(initial.phone);
    const [fbInp, setFbInp] = useState(initial.facebook);
    const [nameSend, setNameSend] = useState(initial.name);
    const [emailSend, setEmailSend] = useState(initial.email);
    const [phoneSend, setPhoneSend] = useState(initial.phone);
    const [fbSend, setFbSend] = useState(initial.facebook);
    const dataToSend = {
        uid: initial.uid,
        name: nameSend,
        photo: initial.photo,
        email: emailSend,
        phone: phoneSend,
        facebook: fbSend
    }

    const changePhoto = (e) => {
        e.preventDefault();
        const file = e.target.files[0]
        uploadFiles(file)
    }

    const uploadFiles = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/avatar/${v4()}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        setPhotoInp(url);
                    })
            })
    }

    const updateStorage = (data) => {
        localStorage.setItem('userInfo', JSON.stringify(data));
        console.log('Storage updated');
    }

    const updateUserInfo = () => {
        const docInfo = doc(db, initial.uid, "userInfo");
        updateDoc(docInfo, dataToSend)
            .then(v => {
                console.log('userInfo updated');
                setPhoneSend(phoneInp);
                setFbSend(fbInp);
            }).then(v => {
            updateStorage(dataToSend);
        }).catch(e => console.log('Error in userInfo updating'));
    }

    const updateLogin = () => {
        updateEmail(auth.currentUser, emailInp)
            .then(v => {
                console.log('Email updated');
                setEmailSend(emailInp);
                updateStorage(dataToSend);
                updateUserInfo();
            }).then(v => {
            updateStorage(dataToSend);
        }).catch(e => {
            console.log('Error in email updating');
        });
    }

    const updateNameAndPhoto = () => {
        updateProfile(auth.currentUser, {
            displayName: nameInp,
            photoURL: photoInp
        })
            .then(v => {
                console.log('Name and photo updated');
                setNameSend(nameInp);
                updateStorage(dataToSend);
                updateUserInfo();
            })
            .catch(e => {
                console.log('Error in name or photo updating');
            });
    }

    const saveChanges = () => {
        updateNameAndPhoto();
        updateLogin();
    }


    return (
        <>
            <div className={st.form}>
                <div className={st.user}>
                    <div className={st.avatar_block}>
                        <label htmlFor={'photoInput'}>
                            <Avatar photo={initial.photo}/>
                        </label>
                        <input
                            className={`${st.photoInput}`}
                            onChange={changePhoto}
                            type={'file'}
                            id={'photoInput'}
                            name={'photoInput'}
                            multiple
                            accept={'image/*, image/jpeg'}
                        />
                        <div className={st.camera}>
                            <img className={st.camera_img} src={camera} alt={'camera'}/>
                        </div>
                    </div>
                    <div className={st.name}>
                        <input className={st.name_row} type="text" placeholder="Name" name="name"
                               value={nameInp} onChange={e => setNameInp(e.target.value)}/>
                    </div>
                </div>
                <div className={st.contacts}>
                    <div className={st.labels}>
                        <label className={st.label} htmlFor="email">Email:</label>
                        <label className={st.label} htmlFor="text">Phone:</label>
                        <label className={st.label} htmlFor="password">FB link:</label>
                    </div>
                    <div className={st.form_rows}>
                        <input className={st.form_row} type="email" placeholder="helenjohnson@gmail.com" name="email"
                               value={emailInp} onChange={e => setEmailInp(e.target.value)}/>
                        <input className={st.form_row} type="tel" placeholder="000-000-00-00" name="password"
                               value={phoneInp} onChange={e => setPhoneInp(e.target.value)}/>
                        <input className={st.form_row} type="url" placeholder="https://www.facebook.com/helenjohnson"
                               name="password"
                               value={fbInp} onChange={e => setFbInp(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className={st.buttons}>
                <BtnHeaderWhite white={true}>
                    Cancel
                </BtnHeaderWhite>
                <BtnHeaderGreen green={true} onClick={saveChanges}>
                    <GreenBtnImg imgPath={save}/>
                    Save changes
                </BtnHeaderGreen>
            </div>
        </>
    )
        ;
};

export default MyData;