import React from 'react';
import st from './sub_nav.module.css'
import {TransitionGroup, CSSTransition} from "react-transition-group";

const MySubNav = ({children}) => {
    return (
        <div className={st.base}>
            {children}
        </div>
    );
};

export default MySubNav;