import React, {useState} from 'react';
import st from './data.module.css'
import Avatar from "../../../../UI/avatar/avatar";
import camera from "../../../../../assets/png/camera.png"
import BtnHeaderWhite from "../../../../UI/btn_header_white/btn_header_white";
import BtnHeaderGreen from "../../../../UI/btn_header_green/btn_header_green";
import GreenBtnImg from "../../../../UI/btn_header_green/icons/GreenBtnImg";
import save from '../../../../../assets/png/save.png'
import {homePage} from "../../../../../router/paths";
import {getAuth, updateProfile} from "firebase/auth";
import {SET_USER_NAME} from "../../../../../store/userReducer";
import {useDispatch, useSelector} from "react-redux";

const MyData = () => {

    const {lockalUser} = useSelector(state => state.user);

    const [name, setName] = useState('localName');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [fb, setFb] = useState('');

    const auth = getAuth();
    const dispatch = useDispatch();
    const saveData = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).catch(e => console.log(e))
        dispatch({type: SET_USER_NAME, payload: name})
    };

    return (
        <>
            <div className={st.form}>
                <div className={st.user}>
                    <div className={st.avatar_block}>
                        <Avatar/>
                        <div className={st.camera}>
                            <img className={st.camera_img} src={camera}/>
                        </div>
                    </div>
                    <div className={st.name}>
                        <input className={st.name_row} type="text" placeholder="Name" name="name"
                               value={name} onChange={e => setName(e.target.value)}/>
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
                               value={email} onChange={e => setEmail(e.target.value)}/>
                        <input className={st.form_row} type="tel" placeholder="000-000-00-00" name="password"
                               value={phone} onChange={e => setPhone(e.target.value)}/>
                        <input className={st.form_row} type="url" placeholder="https://www.facebook.com/helenjohnson"
                               name="password"
                               value={fb} onChange={e => setFb(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className={st.buttons}>
                <BtnHeaderWhite white={true}>
                    Cancel
                </BtnHeaderWhite>
                <BtnHeaderGreen
                    onClick={
                        saveData()
                    }
                    green={true}
                    btnPath={homePage}>
                    <GreenBtnImg imgPath={save}/>
                    Save changes
                </BtnHeaderGreen>
            </div>
        </>
    );
};

export default MyData;