import React, {useState} from 'react';
import style from './post_form.module.css';
import arrowUp from '../../../assets/png/arrow-up.png';
import paw from '../../../assets/png/paw.png';
import avatar from '../../../assets/png/avatar.jpg';
import dog from '../../../assets/png/dog.png';
import {db} from "../../../firebase/firebase-config";
import {addDoc, collection} from "firebase/firestore";
import {Link} from "react-router-dom";

const MyPostForm = () => {

    const [body, setBody] = useState();



    const addBase = () => {
        try {
            addDoc(collection(db, "post"), {
                // Name: initial.displayName,
                postType: 'home',
                body: body,
                date: Date.now(),
                // Images: images,
                // PhotoURL: initial.photoURL,
                // uid: initial.uid,
            }).then(r => console.log(r));
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column`}>
            <h1 className={`${style.titleSemiBold}`}><span className={`${style.titleBold}`}>Your new post!</span> Simply
                text, add photos and publish.</h1>
            <div className={`${style.postCard} row d-flex`}>
                <div className={`d-flex`}>
                    <div className={`${style.smallerTextBlack} text-end`}>
                        <label className={style.smallerText} htmlFor="text">Text:</label>
                        <p className={`${style.littleGreenText}`}>up to 1500 char</p>
                    </div>
                    <textarea className={`ms-2 ${style.smallerTextBlack} ${style.biggestTextarea}`} name={'text'}
                              onChange={e => setBody(e.target.value)}
                              placeholder={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate, fuga ipsum natus repellat repellendus totam? Alias amet consectetur doloribus dolorum, fugit, in ipsum laboriosam modi possimus qui temporibus veritatis, vero. Esse eveniet harum in laborum modi obcaecati pariatur perspiciatis quibusdam. Accusantium autem commodi distinctio error fuga reprehenderit tenetur vitae voluptatibus? A alias assumenda culpa deleniti deserunt dicta dolor doloribus eos fugiat incidunt iusto laboriosam laborum maxime necessitatibus perferendis provident quasi quibusdam quisquam quod recusandae sint, temporibus vel vero! A, accusamus deserunt, dolor dolore ducimus ea eos et eveniet facilis fugit id illo illum impedit incidunt ipsa libero magni neque obcaecati odio porro provident quasi quibusdam quis quo quod repellendus sapiente sit suscipit tempora temporibus totam unde velit voluptatibus. Asperiores assumenda at debitis dignissimos dolore doloremque ducimus ea earum enim, excepturi facilis fugit magnam minus mollitia optio quam veritatis? Error expedita facere impedit inventore libero magni mollitia natus neque nobis quidem soluta tempora, voluptatibus voluptatum. Laudantium nobis obcaecati unde? Amet esse in iure officia pariatur quas. Architecto dicta eaque fugit inventore neque repellat sit voluptate. Excepturi facere fuga necessitatibus sed sequi, voluptate? Animi beatae cupiditate deleniti explicabo minus tempore. Consectetur dolor dolores eius est et, harum in ipsum magni officia quia repellat sed! Autem cupiditate deserunt, distinctio dolores, eveniet ex, iure minima mollitia nobis numquam quaerat rerum tempora tenetur. Ab distinctio doloremque minima sequi. Alias aliquam beatae blanditiis commodi doloremque dolorum earum et eveniet excepturi hic in itaque libero minus nihil placeat quisquam quos, reiciendis sunt ut vero voluptas voluptate!`}
                    />
                </div>
                <div className={`${style.afterBigTextArea} d-flex mb-1 mt-2`}>
                    <div className={`${style.smallerTextBlack} text-end`}>
                        <label className={style.smallerText} htmlFor="text">Photos:</label>
                        <p className={`${style.littleGreenText}`}>up to 4 images</p>
                    </div>
                    <div className={`${style.divTwo} d-flex`}>
                        <div className={`col-5 row d-flex flex-wrap justify-content-center align-items-center`}>
                            <div className={` overflow-hidden text-center`}>
                                <img src={''} alt={'avatar'}/>
                            </div>
                        </div>
                        <div className={`col-4 text-center`}>
                            <img className={`${style.addFileIcon}`} src={arrowUp} alt={''}/>
                            <p className={``}>Drag and drop<br/> photos or</p>
                            <label className={`${style.addFileLabel}`} htmlFor={'fileInput'}>Browse</label>
                        </div>
                        <div className={`${style.divInput}  mb-3`}>
                            <input className={`${style.addFileInput}`} type={'file'} id={'fileInput'}
                                   name={'fileInput'} multiple accept={'image/*, image/jpeg'}/>
                        </div>
                    </div>
                </div>
                <div className={`row d-flex align-items-center mb-1 mt-1`}>
                    <div className={`col-1`}>
                        <img className={`${style.avatarImg}`} src={dog} alt={'dog'}/>
                    </div>
                    <div className={`col-8 ps-4`}>
                        <h3 className={`${style.titleSemiBoldGreen}`}>displayName</h3>
                    </div>
                    <div className={`col-3`}>
                        <button className={`${style.btnHeader}`} onClick={() => addBase()}>
                            <img className={`${style.iconBtnBlack}`} src={paw} alt={''}/>
                            <span className={'m-auto'}>Publish</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostForm;