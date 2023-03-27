import React from 'react';
import logout from '../../../../../assets/png/logout.png';
import st from './nav_btns_icons.module.css'
// import {SET_CHANGE_MAIN_BODY} from "../../../../../store/modalReducer";
// import {useDispatch} from "react-redux";

const NavLogout = () => {

     // const dispatch = useDispatch();

    return (
        <img className={st.body} src={logout} alt={'logout'}/>
    );
};

export default NavLogout;

//  onClick={()=> dispatch({type:SET_CHANGE_MAIN_BODY, payload: 'StartPage'})}