import React, {useEffect, useState} from 'react';
import Avatar from "../UI/avatar/avatar";
import MyPostsPage from "../main_body/page/posts_page/MyPostsPage";
import {getAllPosts} from "../../firebase/service";
import {getUid} from "../../firebase/auth-service";
import {useDispatch, useSelector} from "react-redux";
import {SET_UID} from "../../store/postsReducer";

const MyHome = () => {

    const homePosts = [
        {
            id: 1,
            avatar: <Avatar/>,
            user: 'Elly',
            date: '15.07.',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        }
    ]

    const [posts, setPosts] = useState([]);
    const uid = useSelector(state => state.posts.uid);
    const dispatch = useDispatch();


    useEffect(() => {
        getUid().then(data => dispatch({type: SET_UID, payload: data}))
        getAllPosts(uid)
            .then(data => setPosts([...data.post]))
    }, [posts])



    return (
        <MyPostsPage posts={posts}/>
    );
};

export default MyHome;