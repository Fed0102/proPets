import React from "react";
import st from "./header.module.css";
import logo from "../../../assets/svg/logo.svg";
import BtnHeaderGreen from "../../UI/btn_header_green/btn_header_green";
import BtnHeaderWhite from "../../UI/btn_header_white/btn_header_white";
import plusImg from '../../../assets/png/plus.png';
import lostImg from '../../../assets/png/lost.png';
import foundImg from '../../../assets/png/found.png';
import {
    favorites,
    fostering,
    found,
    foundForm,
    homePage,
    hotels,
    lost,
    lostForm,
    newPostHome,
    startPage,
    vetHelp,
    walking
} from "../../../constants/paths";
import {useWindowPath} from "../../../hooks/useWindowPath";
import GreenBtnImg from "../../UI/btn_header_green/icons/GreenBtnImg";
import {useSelector} from "react-redux";

const MyHeader = () => {
    const location = useWindowPath();
    const isStart = [startPage, '', '/'].some(path => path === location);
    const isLostFound = [lost, found].some(path => path === location);
    const isPosts = [homePage, hotels, walking, fostering, vetHelp, '', '/'].some(path => path === location);
    const localUser = useSelector(state => state.userRegistration.localUser);

    const test = useWindowPath();

    return (
        <div className={localUser ? `${st.header} ${st.header_main}` : st.header}>
            <div className={st.body}>
                <img src={logo} className={localUser ? `${st.logo} ${st.logo_main}` : st.logo} alt={logo}/>

                {isPosts && localUser &&
                    <BtnHeaderGreen test={test} green={true} btnPath={newPostHome}>
                        <GreenBtnImg imgPath={plusImg}/>
                        Add new
                    </BtnHeaderGreen>
                }
                {isLostFound && localUser &&
                    <div className={st.btns}>
                        <BtnHeaderGreen green={false} btnPath={lostForm}>
                            <GreenBtnImg imgPath={lostImg}/>
                            I lost my pet
                        </BtnHeaderGreen>
                        <BtnHeaderGreen green={true} btnPath={foundForm}>
                            <GreenBtnImg imgPath={foundImg} yellow={true}/>
                            I found a pet
                        </BtnHeaderGreen>
                    </div>
                }
                {!localUser &&
                    <BtnHeaderWhite>
                        Sign in
                    </BtnHeaderWhite>
                }
            </div>
        </div>
    );
};

export default MyHeader;