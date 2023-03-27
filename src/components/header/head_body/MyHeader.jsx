import React from "react";
import stMain from "./header_main.module.css";
import stBase from "./header_base.module.css"
import logo from "../../../assets/svg/logo.svg";
import Btn_header_main from "../../UI/btn_header_main/btn_header_main";
import Btn_header_start from "../../UI/btn_header_start/btn_header_start";
import HeadPlus from "../btns/icons/HeadPlus";
import Lost from "../btns/icons/HeadLost";
import Found from "../btns/icons/HeadFound";
import {foundForm, lostForm, newPost} from "../../../constants/paths";

const MyHeader = () => {

    const mainState = 'lostFound';
    const stId = mainState ? stMain : '';

    return (
        <div className={stBase.header} id={stId.header}>
            <div className={stBase.body} id={stId.body}>
                <img src={logo} className={stBase.logo} id={stId.logo}/>

                {mainState === 'posts' &&
                    <Btn_header_main green={true} btnPath={newPost}>
                        <HeadPlus/>
                        Add new
                    </Btn_header_main>
                }
                {mainState === 'lostFound' &&
                    <div className={stBase.btns}>
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
                {mainState === '' &&
                    <Btn_header_start>
                        Sign in
                    </Btn_header_start>
                }
            </div>
        </div>
    );
};

export default MyHeader;