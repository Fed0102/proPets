import React from 'react';
import star from '../../../../assets/png/star_empty.png';
// import test from '../../../../assets/svg/star_test.svg'
import st from './post_star.module.css'
import {Link} from "react-router-dom";
import {favorites} from "../../../../router/paths";
// import {addDoc, collection} from "firebase/firestore";
// import {db} from "../../../../firebase/firebase-config";

const PostStar = () => {

    //
    // const [favoritesPost, setFavoritesPost] = useState();
    //
    // const addBase = () => {
    //     try {
    //         addDoc(collection(db, "post"), {
    //             favoritesPost: favoritesPost,
    //         }).then(r => console.log(r));
    //     } catch (e) {
    //         console.error("Error adding document: ", e);
    //     }
    // }

    return (
        // <Link to={favorites} setPost={setFavoritesPost} onClick={()=>addBase()}>
        <Link to={favorites} className={st.star}>
            <img className={st.body} src={star} alt={'star'}/>
        </Link>
    );
};

export default PostStar;