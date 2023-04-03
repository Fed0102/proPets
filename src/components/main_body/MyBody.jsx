import React, {useEffect, useState} from 'react';
import st from './body.module.css'
import MyNavigation from "./nav_bar/nav_body/MyNavigation";
import MyPage from "./page/MyPage";
import MyBlock from "./right_block/MyBlock";
import MyRouter from "../../router/MyRouter";
import {useSelector} from "react-redux";
import {updateProfile} from "firebase/auth";
import {auth, db} from "../../firebase/firebase-config";
import {doc, getDoc, setDoc} from "firebase/firestore";
import Loader from "../UI/loader/Loader";

const MyBody = () => {

    const [loader, setLoader] = useState(true);

    const userBD = auth.currentUser;
    const userName = useSelector(state => state.user.name);
    // let locStor = localStorage.getItem('userInfo');
    // let userInfoLoc = JSON.parse(locStor);

    const updName = () => {
        if (userName !== null) {
            updateProfile(userBD, {
                displayName: userName,
                photoURL: 'https://firebasestorage.googleapis.com/v0/b/propetslvafed.appspot.com/o/avatar%2Fbase_avatar.png?alt=media&token=f44b5975-fc36-4490-b12c-89e7ef55feda'
            }).then(v => console.log("Name updated"))
                .catch(e => {
                    console.log("Can't use name");
                })
        }
    }

    const getUserInfo = async () => {
        const docInfo = doc(db, userBD.uid, 'userInfo');
        const userInfoDB = await getDoc(docInfo);
        if (userInfoDB.data() === undefined) {
            const newUser = {
                uid: userBD.uid,
                name: userBD.displayName,
                photo: userBD.photoURL,
                email: userBD.email,
                phone: '',
                facebook: ''
            }
            await setDoc(docInfo, newUser);
            localStorage.setItem('userInfo', JSON.stringify(newUser));
        } else {
            localStorage.setItem('userInfo', JSON.stringify(userInfoDB.data()));
        }
    }

    useEffect(() => {
        getUserInfo().catch(e => console.log(e));
        updName();
        setLoader(false);
    }, []);

    return (
        <>
            {loader ?
                <Loader/>
                :
                <div className={st.base}>
                    <MyNavigation/>
                    <MyPage>
                        <MyRouter user={true}/>
                    </MyPage>
                    <MyBlock/>
                </div>}
        </>
    );
};

export default MyBody;

