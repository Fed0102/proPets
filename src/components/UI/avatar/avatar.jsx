import React from 'react';
import st from './avatar.module.css';
import avatar from '../../../assets/png/exmpl.png';

const Avatar = () => {
    return (
        <img className={st.body} src={avatar}/>
    );
};

export default Avatar;