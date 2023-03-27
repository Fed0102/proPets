import React from 'react';
import st from './btn_nav_pg.module.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {SET_CHANGE_MAIN_BODY} from "../../../store/modalReducer";

const BtnNavPg = ({children, btnPath}) => {

    const dispatch = useDispatch();

    return (
        <div className={st.base}>
            <Link to={btnPath} className={st.link}>
                <div className={st.normal} onClick={()=>dispatch({type:SET_CHANGE_MAIN_BODY, payload: 'HomePosts'})}>
                    {children}
                </div>
            </Link>
        </div>
    );
};

export default BtnNavPg;