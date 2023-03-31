import React, {useEffect, useState} from 'react';
import LostInputs from "../../UI/lost_found_inputs/lost_found_inputs";
import LostCard from "../../UI/lost_found_card/lost_found_card";
import style from '../../UI/lost_found_inputs/lost_found_inputs.module.css';
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../../firebase/firebase-config";

const Lost = () => {

    const [lostFoundPosts, setLostFoundPosts] = useState([]);
    const baseCollectionRefTree = query(collection(db, "post"));

    function sortObject(field) {
        return (a, b) => a[field] < b[field] ? 1 : -1;
    }

    useEffect(() => {
        const getBase = async () => {
            const data = await getDocs(baseCollectionRefTree)
            setLostFoundPosts(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('Date')));
        }
        getBase().then(r => console.log(r))
    }, [])

    return (
        <div className={`${style.myLostFoundPostsDiv}`}>
            <div>
                <LostInputs/>
                {lostFoundPosts.map(lostFoundPost =>
                    <LostCard key={lostFoundPost.id} lostFoundPost={lostFoundPost}/>
                )}
            </div>
        </div>
    );
};

export default Lost;