import React from 'react';
import st from './post_wind.module.css'
import Avatar from "../avatar/avatar";
import PostStar from "./icons/post_star";
import cats from "../../../assets/png/cats.jpeg";

const PostWind = ({post}) => {

    return (
        <div className={st.base}>
            <div className={st.post_avatar}>
                <Avatar/>
            </div>
            <div className={st.post_text}>
                <h5 className={st.post_name}>{post.user}</h5>
                <div className={st.post_date}>{new Date(post.date + 10800000).toISOString().slice(0,10)} {new Date(post.date + 10800000).toISOString().slice(11,16)}</div>
                <div>
                    <img src={cats} alt={'cats'}/>
                </div>
                {post.body}
            </div>
            <div className={st.post_btns}>
                <PostStar/>
            </div>
        </div>
    );
};

export default PostWind;