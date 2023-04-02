import React from 'react';
import star from '../../../../assets/png/star_empty.png';
import st from './post_star.module.css'
import {Link} from "react-router-dom";
import {favorites} from "../../../../router/paths";

const PostStar = () => {

    return (
        <Link to={favorites} className={st.star}>
            <img className={st.body} src={star} alt={'star'}/>
        </Link>
    );
};

export default PostStar;