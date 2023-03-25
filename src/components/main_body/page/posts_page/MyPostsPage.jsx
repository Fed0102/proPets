import React from 'react';
import Post from "../../../UI/post_wind/post_wind";
import st from "./posts_page.module.css"

const MyPostsPage = ({title, posts}) => {
    return (
        <>
            {title &&
                <div className={st.title}>
                {title}
            </div>}
            {posts.map(post =>
                <Post key={post.id} post={post}/>
            )}
        </>
    );
};

export default MyPostsPage;