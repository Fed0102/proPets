import React from 'react';
import st from './body.module.css'
import MyNavigation from "./nav_bar/nav_body/MyNavigation";
import MyPage from "./page/MyPage";
import MyBlock from "./right_block/MyBlock";
import {BrowserRouter} from "react-router-dom";
import MyRouter from "../MyRouter";

const MyBody = () => {
    return (
        <div className={st.base}>
            <BrowserRouter>
                <MyNavigation/>
                <MyPage>
                    <MyRouter/>
                </MyPage>
                <MyBlock/>
            </BrowserRouter>
        </div>
    );
};

export default MyBody;