import React, {useEffect, useState} from 'react';
import Post from "../../../UI/post_wind/post_wind";
import st from "./posts_page.module.css"
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../../../firebase/firebase-config";

const MyPostsPage = ({title, type}) => {

    const [homePosts, setHomePosts] = useState([])
    const baseCollectionRefTree = query(collection(db, "post"));

    function sortObject(field) {
        return (a, b) => a[field] < b[field] ? 1 : -1;
    }

    useEffect(() => {
        const getBase = async () => {
            const data = await getDocs(baseCollectionRefTree)
            setHomePosts(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('Date')));
        }
        getBase()
    }, [])

    return (
        <>
            {title &&
                <div className={st.title}>
                {title}
            </div>}
            {homePosts.map(post =>
                <Post key={post.id} post={post}/>
            )}
        </>
    );
};

export default MyPostsPage;