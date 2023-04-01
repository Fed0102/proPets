import React, {useEffect, useState} from 'react';
import Post from "../../../UI/post_card/post_wind";
import st from "./posts_page.module.css"
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../../../firebase/firebase-config";
import {useWindowPath} from "../../../../hooks/useWindowPath";
import LostInputs from "../../../UI/lost_found_inputs/lost_found_inputs";
import LostCard from "../../../UI/lost_found_card/lost_found_card";

const MyPostsPage = ({title}) => {

    const [posts, setPosts] = useState([]);
    const type = useWindowPath().substring(1);
    const baseCollectionRefTree = query(collection(db, "post"), where("postType", "==", type));
    const lostOrFound = type === 'lost' || type === 'found';
    function sortObject(field) {
        return (a, b) => a[field] < b[field] ? 1 : -1;
    }

    useEffect(() => {
        const getBase = async () => {
            const data = await getDocs(baseCollectionRefTree)
            setPosts(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('date')));
        }
        getBase()
            .then()
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            {title &&
                <div className={st.title}>
                    {title}
                </div>}
            {lostOrFound &&
                <>
                    <LostInputs/>
                    {posts.map(lostFoundPost =>
                        <LostCard key={lostFoundPost.id} lostFoundPost={lostFoundPost}/>
                    )}
                </>}
            {!lostOrFound &&
                posts.map(post =>
                <Post key={post.id} post={post}/>
            )}
        </>
    );
};

export default MyPostsPage;