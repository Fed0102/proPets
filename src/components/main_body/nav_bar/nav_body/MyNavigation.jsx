import React from 'react';
import st from './navigation.module.css';
import BtnNavPg from "../../../UI/btn_nav_pg/btn_nav_pg";
import NavHome from "../btns/icons/NavHome";
import NavLost from "../btns/icons/NavLost";
import NavFound from "../btns/icons/NavFound";
import NavServices from "../btns/icons/NavServices";
import NavFavorites from "../btns/icons/NavFavorites";
import NavLogout from "../btns/icons/NavLogout";
import BtnNavPrfl from "../../../UI/btn_nav_profile/btn_nav_profile";
import Avatar from "../../../UI/avatar/avatar";
import MySubNav from "../sub_nav_body/MySubNav";
import BtnSubNavPg from "../../../UI/btn_sub_nav_pg/btn_sub_nav_pg";
import SubNavHotels from "../btns/icons/SubNavHotels";
import SubNavWalking from "../btns/icons/SubNavWalking";
import SubNavVetHelp from "../btns/icons/SubNavVetHelp";
import SubNavFostering from "../btns/icons/SubNavFostering";
import {favorites, fostering, found, homePage, hotels, lost, services, vetHelp, walking} from "../../../../constants";
import {useLocation} from "react-router-dom";

const MyNavigation = () => {
    const location = useLocation().pathname.substring(1);
    const showServ = [hotels, walking, fostering, vetHelp].some((path) => path === location);

    const pgBtnsAr = [
        {id: 0, name: 'Home', paths: homePage, icon: <NavHome/>, sub_points: null},
        {id: 1, name: 'Lost', paths: lost, icon: <NavLost/>, sub_points: null},
        {id: 2, name: 'Found', paths: found, icon: <NavFound/>, sub_points: null},
        {id: 3, name: 'Services', paths: hotels, icon: <NavServices/>, sub_points:
                [
                    {sub_id: 0, sub_name: 'Hotels', sub_paths: hotels, sub_icon: <SubNavHotels/>},
                    {sub_id: 1, sub_name: 'Walking', sub_paths: walking, sub_icon: <SubNavWalking/>},
                    {sub_id: 2, sub_name: 'Fostering', sub_paths: fostering, sub_icon: <SubNavFostering/>},
                    {sub_id: 3, sub_name: 'VetHelp', sub_paths: vetHelp, sub_icon: <SubNavVetHelp/>},
                ]
        },
        {id: 4, name: 'Favorites', paths: favorites, icon: <NavFavorites/>, sub_points: null},
    ];

    return (
        <div className={st.base}>
            <div className={st.pg_btns}>
                {pgBtnsAr.map(btn =>
                    <div key={btn.id}>
                        <BtnNavPg btnPath={btn.paths}>
                            {btn.icon}
                            {btn.name}
                        </BtnNavPg>
                        {showServ && btn.sub_points &&
                            <MySubNav>
                                {btn.sub_points.map(subBtn =>
                                    <BtnSubNavPg key={subBtn.sub_id} btnPath={subBtn.sub_paths}>
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