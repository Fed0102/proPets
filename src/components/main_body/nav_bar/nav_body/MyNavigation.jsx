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

const MyNavigation = () => {
    const pgBtnsAr = [
        {id: 0, name: 'Home', icon: <NavHome/>},
        {id: 1, name: 'Lost', icon: <NavLost/>},
        {id: 2, name: 'Found', icon: <NavFound/>},
        {id: 3, name: 'Services', icon: <NavServices/>},
        {id: 4, name: 'Favorites', icon: <NavFavorites/>},
    ]

    return (
        <div className={st.base}>
            <div className={st.pg_btns}>
                {pgBtnsAr.map(btn =>
                    <BtnNavPg key={btn.id}>
                        {btn.icon}
                        {btn.name}
                    </BtnNavPg>
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