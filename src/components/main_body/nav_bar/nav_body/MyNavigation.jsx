import React from 'react';
import st from './navigation.module.css';
import BtnNavPg from "../../../UI/btn_nav_pg/btn_nav_pg";
import iconLogout from "../../../../assets/png/logout.png";
import BtnNavPrfl from "../../../UI/btn_nav_profile/btn_nav_profile";
import Avatar from "../../../UI/avatar/avatar";
import MySubNav from "./sub_nav_body/MySubNav";
import BtnSubNavPg from "../../../UI/btn_sub_nav_pg/btn_sub_nav_pg";
import {fostering, hotels, profile, vetHelp, walking} from "../../../../router/paths";
import {useWindowPath} from "../../../../hooks/useWindowPath";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "firebase/auth";
import {auth} from "../../../../firebase/firebase-config";
import {REMOVE_USER} from "../../../../store/userReducer";
import BtnNavLogout from "../../../UI/btn_nav_pg/btn_nav_logout";
import {pgBtnsAr} from "./pg_btns_array";

const MyNavigation = () => {
    const location = useWindowPath();
    const showServices = [hotels, walking, fostering, vetHelp].some((path) => path === location);
    const userName = useSelector(state => state.user.name);
    const dispatch = useDispatch();

    const logout = () => {
        signOut(auth)
            .then(() => {
                dispatch({type: REMOVE_USER});
            }).catch(e => console.log(e.message));
    }

    return (
        <div className={st.base}>
            <div className={st.pg_btns}>
                {pgBtnsAr.map(btn =>
                    <div key={btn.id}>
                        <BtnNavPg btnPath={btn.paths} icon={btn.icon} title={btn.name}/>
                        {showServices && btn.sub_points &&
                            <MySubNav>
                                {btn.sub_points.map(subBtn =>
                                    <BtnSubNavPg key={subBtn.sub_id} btnPath={subBtn.sub_paths}
                                                 icon={subBtn.sub_icon} title={subBtn.sub_name}/>
                                )}
                            </MySubNav>
                        }
                    </div>
                )}
            </div>
            <div className={st.log_btns}>
                <BtnNavPrfl btnPath={profile}>
                    <Avatar/>
                    {userName}
                </BtnNavPrfl>
                <div onClick={() => logout()}>
                    <BtnNavLogout icon={iconLogout} title={'Logout'}/>
                </div>
            </div>
        </div>
    );
};

export default MyNavigation;