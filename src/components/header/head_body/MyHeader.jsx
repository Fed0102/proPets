import React from "react";
import st from "./header.module.css";
import logo from "../../../assets/svg/logo.svg";
import BtnHeaderGreen from "../../UI/btn_header_green/btn_header_green";
import BtnHeaderWhite from "../../UI/btn_header_white/btn_header_white";
import plusImg from '../../../assets/png/plus.png';
import lostImg from '../../../assets/png/lost.png';
import foundImg from '../../../assets/png/found.png';
import {
    fostering, found, foundForm, homePage,
    hotels, lost, lostForm, newPostFostering,
    newPostHome, newPostHotels, newPostVetHelp, newPostWalking,
    vetHelp, walking
} from "../../../router/paths";
import {useWindowPath} from "../../../hooks/useWindowPath";
import GreenBtnImg from "../../UI/btn_header_green/icons/GreenBtnImg";

const MyHeader = ({user}) => {
    const location = useWindowPath();
    const isLostFound = [lost, found].some(path => path === location);
    const isPosts = [homePage, hotels, walking, fostering, vetHelp, '', '/'].some(path => path === location);

    const choosePath = () => {
        switch (location) {
            case homePage:
                return newPostHome;
            case hotels:
                return newPostHotels;
            case walking:
                return newPostWalking;
            case fostering:
                return newPostFostering;
            case vetHelp:
                return newPostVetHelp;
        }
    }

    return (
        <div className={user ? `${st.header} ${st.header_main}` : st.header}>
            {/*<div className={st.body}>*/}
            <div className={st.left}>
                <img src={logo} className={user ? `${st.logo} ${st.logo_main}` : st.logo} alt={logo}/>
            </div>

            {isPosts && user &&
                <>
                    <div className={st.center}></div>
                    <div className={st.right}>
                        <BtnHeaderGreen green={true} btnPath={choosePath()}>
                            <GreenBtnImg imgPath={plusImg}/>
                            Add new
                        </BtnHeaderGreen>
                    </div>
                </>
            }
            {isLostFound && user &&
                <>
                    <div className={st.center}>
                        <BtnHeaderGreen green={false} btnPath={lostForm}>
                            <GreenBtnImg imgPath={lostImg}/>
                            I lost my pet
                        </BtnHeaderGreen>
                    </div>
                    <div className={st.right}>
                        <BtnHeaderGreen green={true} btnPath={foundForm}>
                            <GreenBtnImg imgPath={foundImg} yellow={true}/>
                            I found a pet
                        </BtnHeaderGreen>
                    </div>
                </>
            }
            {!user &&
                <>
                    <div className={st.center_start}></div>
                    <div className={st.right_start}>
                        <BtnHeaderWhite>
                            Sign in
                        </BtnHeaderWhite>
                    </div>

                </>
            }

            {user && !isLostFound && !isPosts &&
                <>
                    <div className={st.center}></div>
                    <div className={st.right}></div>
                </>
            }

        </div>
    );
};

export default MyHeader;