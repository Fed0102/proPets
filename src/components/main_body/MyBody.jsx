import React from 'react';
import st from './body.module.css'
import MyNavigation from "./nav_bar/nav_body/MyNavigation";
import MyPage from "./page/MyPage";
import MyBlock from "./right_block/MyBlock";
import MyHome from "../pages/MyHome";
// import MyFavorites from "../pages/MyFavorites";
// import MyLostFoundPosts from "../pages/lost_found_posts/MyLostFoundPosts";
// import MyLostFoundForm from "../pages/lost_found_form/MyLostFoundForm";

const MyBody = () => {
    return (
        <div className={st.base}>
            <MyNavigation/>
            <MyPage>
                <MyHome/>
                {/*<MyLostFoundPosts/>*/}
                {/*<MyLostFoundForm/>*/}
                {/*<MyFavorites/>*/}
            </MyPage>
            <MyBlock/>
        </div>
    );
};

export default MyBody;