import React, {useEffect, useState} from 'react';
import LostInputs from "../../UI/lost_found_inputs/lost_found_inputs";
import LostCard from "../../UI/lost_found_card/lost_found_card";
import style from '../../UI/lost_found_inputs/lost_found_inputs.module.css';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../../firebase/firebase-config";
import {useWindowPath} from "../../../hooks/useWindowPath";
import MyPostsPage from "../../main_body/page/posts_page/MyPostsPage";

const Found = () => {

    // const [lostFoundPosts, setLostFoundPosts] = useState([]);
    // const type = useWindowPath().substring(1);
    // const baseCollectionRefTree = query(collection(db, "post"), where("postType", "==", type));
    //
    // function sortObject(field) {
    //     return (a, b) => a[field] < b[field] ? 1 : -1;
    // }
    //
    // useEffect(() => {
    //     const getBase = async () => {
    //         const data = await getDocs(baseCollectionRefTree)
    //         setLostFoundPosts(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('date')));
    //     }
    //     getBase()
    // }, [])


        return (
            <MyPostsPage/>
            // <div className={`${style.myLostFoundPostsDiv}`}>
            //     <div>
            //         <LostInputs/>
            //         {lostFoundPosts.map(lostFoundPost =>
            //             <LostCard key={lostFoundPost.id} lostFoundPost={lostFoundPost}/>
            //         )}
            //     </div>
            // </div>
        );
};

export default Found;

// if (type === 'lost'){
//     return (
//         <div className={`${style.myLostFoundPostsDiv}`}>
//             <div>
//                 <LostInputs/>
//                 {lostFoundPosts.map(lostFoundPost =>
//                     <LostCard key={lostFoundPost.id} lostFoundPost={lostFoundPost}/>
//                 )}
//             </div>
//         </div>
//     );
// }else if (type === 'found'){
//     return (
//         <div className={`${style.myLostFoundPostsDiv}`}>
//             <div>
//                 <LostInputs/>
//                 {lostFoundPosts.map(lostFoundPost =>
//                     <LostCard key={lostFoundPost.id} lostFoundPost={lostFoundPost}/>
//                 )}
//             </div>
//         </div>
//     );
// }