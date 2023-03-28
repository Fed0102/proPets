import React from "react";
import st from "./header.module.css";
import logo from "../../../assets/svg/logo.svg";
import Btn_header_main from "../../UI/btn_header_main/btn_header_main";
import Btn_header_start from "../../UI/btn_header_start/btn_header_start";
import HeadPlus from "../btns/icons/HeadPlus";
import Lost from "../btns/icons/HeadLost";
import Found from "../btns/icons/HeadFound";
import {
    favorites,
    fostering,
    found,
    foundForm,
    homePage,
    hotels,
    lost,
    lostForm,
    newPost,
    start, vetHelp,
    walking
} from "../../../constants/paths";
import {useWindowPath} from "../../../hooks/useWindowPath";
import {auth2} from "../../../firebase/firebase-config";

const MyHeader = () => {
    const location = useWindowPath();
    const isStart = [start, '', '/'].some(path => path === location);
    const isLostFound = [lost, found].some(path => path === location);
    const isPosts = [homePage, hotels, walking, fostering, vetHelp, '', '/'].some(path => path === location);

    return (
        <div className={auth2 ? `${st.header} ${st.header_main}` : st.header}>
            <div className={st.body}>
                <img src={logo} className={auth2 ? `${st.logo} ${st.logo_main}` : st.logo}/>

                {isPosts && auth2 &&
                    <Btn_header_main green={true} btnPath={newPost}>
                        <HeadPlus/>
                        Add new
                    </Btn_header_main>
                }
                {isLostFound && auth2 &&
                    <div className={st.btns}>
                        <Btn_header_main green={false} btnPath={lostForm}>
                            <Lost/>
                            I lost my pet
                        </Btn_header_main>
                        <Btn_header_main green={true} btnPath={foundForm}>
                            <Found/>
                            I found a pet
                        </Btn_header_main>
                    </div>
                }
                {!auth2 &&
                    <Btn_header_start>
                        Sign in
                    </Btn_header_start>
                }
            </div>
        </div>
    );
};

export default MyHeader;