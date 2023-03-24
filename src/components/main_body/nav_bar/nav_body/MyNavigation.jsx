import React from 'react';
import st from './navigation.module.css'
import BtnNavPg from "../../../UI/btn_nav_pg/btn_nav_pg";
import NavHome from "../btns/icons/NavHome";
import NavLost from "../btns/icons/NavLost";
import NavFound from "../btns/icons/NavFound";
import NavServices from "../btns/icons/NavServices";
import NavFavorites from "../btns/icons/NavFavorites";
import NavLogout from "../btns/icons/NavLogout";
import BtnNavPrfl from "../../../UI/btn_nav_profile/btn_nav_profile";
import Avatar from "../../../UI/avatar/avatar";
import MySubNav from "./sub_nav_body/MySubNav";
import BtnSubNavPg from "../../../UI/btn_sub_nav_pg/btn_sub_nav_pg";

const MyNavigation = () => {
    const pgBtnsAr = [
        {id: 0, name: 'Home', icon: <NavHome/>, sub_points: null},
        {id: 1, name: 'Lost', icon: <NavLost/>, sub_points: null},
        {id: 2, name: 'Found', icon: <NavFound/>, sub_points: null},
        {id: 3, name: 'Services', icon: <NavServices/>, sub_points:
                [
                    {sub_id: 0, sub_name: 'Hotels', sub_icon: <NavHome/>},
                    {sub_id: 1, sub_name: 'Walking', sub_icon: <NavHome/>},
                    {sub_id: 2, sub_name: 'Fostering', sub_icon: <NavHome/>},
                    {sub_id: 3, sub_name: 'VetHelp', sub_icon: <NavHome/>},
                ]
        },
        {id: 4, name: 'Favorites', icon: <NavFavorites/>, sub_points: null}
    ]

    return (
        <div className={st.base}>
            <div className={st.pg_btns}>
                {pgBtnsAr.map(btn =>
                    <div key={btn.id}>
                        <BtnNavPg>
                            {btn.icon}
                            {btn.name}
                        </BtnNavPg>
                        {btn.sub_points &&
                            <MySubNav>
                                {btn.sub_points.map(subBtn =>
                                    <BtnSubNavPg key={subBtn.sub_id}>
                                        {subBtn.sub_icon}
                                        {subBtn.sub_name}
                                    </BtnSubNavPg>
                                )}
                            </MySubNav>
                        }
                    </div>
                )}
            </div>
            <div className={st.log_btns}>
                <BtnNavPrfl>
                    <Avatar/>
                    Elly
                </BtnNavPrfl>
                <BtnNavPg>
                    <NavLogout/>
                    Logout
                </BtnNavPg>
            </div>
        </div>
    );
};

export default MyNavigation;