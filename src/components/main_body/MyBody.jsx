import React from 'react';
import st from './body.module.css'
import MyNavigation from "./nav_bar/nav_body/MyNavigation";
import MyPage from "./page/MyPage";
import MyBlock from "./right_block/MyBlock";
import MyRouter from "../../router/MyRouter";

const MyBody = () => {
    return (
        <div className={st.base}>
            <MyNavigation/>
            <MyPage>
                <MyRouter user={true}/>
            </MyPage>
            <MyBlock/>
        </div>
    );
};

export default MyBody;

