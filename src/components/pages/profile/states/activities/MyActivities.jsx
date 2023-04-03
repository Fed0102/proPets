import React, {useEffect, useState} from 'react';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../../../../firebase/firebase-config";
import Loader from "../../../../UI/loader/Loader";
import LostInputs from "../../../../UI/lost_found_inputs/lost_found_inputs";
import LostCard from "../../../../UI/lost_found_card/lost_found_card";
import Post from "../../../../UI/post_card/post_wind";
import {useWindowPath} from "../../../../../hooks/useWindowPath";

const MyActivities = () => {

    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const collectionRef = query(collection(db, "post"), where("uid", "==", user.uid));
    const [posts, setPosts] = useState([]);
    const type = useWindowPath().substring(1);
    const lostOrFound = type === 'lost' || type === 'found';

    function sortObject(field) {
        return (a, b) => a[field] < b[field] ? 1 : -1;
    }

    useEffect(() => {
        setIsPostsLoading(true)
        setTimeout(() => {
            const getBase = async () => {
                const data = await getDocs(collectionRef)
                setPosts(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('date')));
            }
            getBase()
                .then()
                .catch(e => console.log(e))
            setIsPostsLoading(false)
        }, 1000);
    }, []);

    return (
        <div>
            {isPostsLoading
                ? <Loader/>
                : lostOrFound &&
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
        </div>
    );
};

export default MyActivities;