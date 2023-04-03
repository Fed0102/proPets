import React from 'react';
import st from './avatar.module.css';

const Avatar = ({photo}) => {
    return (
        <img className={st.body} src={photo} alt={'avatar'}/>
    );
};

export default Avatar;