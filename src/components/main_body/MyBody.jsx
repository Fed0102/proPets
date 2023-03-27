import React from 'react';
import st from './body.module.css'
import MyNavigation from "./nav_bar/nav_body/MyNavigation";
import MyPage from "./page/MyPage";
import MyRouter from "../MyRouter";
import MyBlock from "./right_block/MyBlock";

const MyBody = () => {
    return (
        <div className={st.base}>
            <MyNavigation/>
            <MyPage>
                <MyRouter/>
            </MyPage>
            <MyBlock/>
        </div>
    );
};

export default MyBody;

