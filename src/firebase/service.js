import {db} from "./firebase-config";
import {doc, getDoc, updateDoc, arrayUnion, setDoc} from "firebase/firestore";

export async function addPost(title, uid) {
    const ref = doc(db, 'posts', uid);
    const temp = await getDoc(ref);
    if (temp.exists()) {
        await updateDoc(ref, {post: arrayUnion(title)})
    } else {
        await setDoc(ref, {post: [title]})
    }
}
export async function getAllPosts(uid) {
    const ref = doc(db, 'posts', uid);
    const temp = await getDoc(ref);
    return temp.exists() ? temp.data() : {post: []};
}
// export async function updatePost(uid, posts){
//     const ref = doc(db,'posts', uid)
//     await updateDoc(ref,{post: posts});
// }