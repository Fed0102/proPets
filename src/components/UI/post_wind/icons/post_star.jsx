import React from 'react';
import star from '../../../../assets/png/star_empty.png';
import st from './post_star.module.css'

const PostStar = () => {
    return (
        <img className={st.body} src={star}/>
    );
};

export default PostStar;