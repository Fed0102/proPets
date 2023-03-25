import React, {useState} from 'react';
import search from '../../../../assets/png/search.png';
import dog from '../../../../assets/png/dog.png';
import style from './start_one.module.css';
import Modal from "../modal_window/ModalHeader/Modal";

const StartOne = ({setPage}) => {

    const [lostBtn, setLostBtn] = useState('I lost my pet!');
    const [foundBtn, setFoundBtn] = useState('I found a pet!');
    const [modalActive, setModalActive] = useState(false);

    const changeLostButton = () => {
        setLostBtn('Click to find!');
    }

    const initialLostButton = () => {
        setLostBtn('I lost my pet!');
    }

    const changeFoundButton = () => {
        setFoundBtn('What to do?');
    }

    const initialFoundButton = () => {
        setFoundBtn('I found a pet!');
    }


    return (
        <section>
            <div className={style.mainDiv}>
                <div>
                    <div className={style.welcomeTextSize}>
                        <h1 className={style.pText}>Welcome to your <span
                            className={style.colorSpanText}>pawfessional</span> community</h1>
                    </div>
                    <div onClick={() => setModalActive(true)}>
                        <button className={style.btnLostPet} onMouseOver={changeLostButton}
                                onMouseOut={initialLostButton}>
                            <div className={style.search}>
                                <span className={style.btnSpan}>{lostBtn}</span>
                                <img src={search} alt="search"/>
                            </div>
                        </button>
                        <button className={style.btnFoundPet} onMouseOver={changeFoundButton}
                                onMouseOut={initialFoundButton}>
                            <span className={style.btnSpanWhite}>{foundBtn}</span>
                        </button>
                    </div>

                    <div className={style.divJoin}>
                        <h4>
                            I'm okay,just want to
                            <span className={style.join} onClick={() => setModalActive(true)}> JOIN </span>
                            the pawsome community!
                        </h4>
                    </div>
                </div>
<<<<<<< HEAD
                <div className={style.imgDiv}>
                    <img src={dog} alt="dog"/>
=======
                <div className={'col-10'}>
                    <h4 className={`${style.textJoin} m-0 px-5`}>
                        Im okay,just want to
                        <span className={style.join} onClick={() => setModalActive(true)}>join</span>
                        the pawsome community!'
                    </h4>
>>>>>>> main
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} setPage={setPage}/>
        </section>
    );
};

export default StartOne;

// return (
//     <section className={`${style.section} container-fluid`}>
//         <div className={`${style.mainDiv} row justify-content-evenly`}>
//             <div className={`${style.justifyContent} col-9 d-flex flex-wrap`}>
//                 <div className={style.welcomeTextSize}>
//                     <div>
//                         <h1 className={style.pText}>Welcome to your <span
//                             className={style.colorSpanText}>pawfessional</span> community</h1>
//                     </div>
//                     <div onClick={() => setModalActive(true)}>
//                         <button className={style.btnLostPet} onMouseOver={changeLostButton}
//                                 onMouseOut={initialLostButton}>
//                             <div className={style.search}>
//                                 <span className={style.btnSpan}>{lostBtn}</span>
//                                 <img src={search} alt="search"/>
//                             </div>
//                         </button>
//                         <button className={style.btnFoundPet} onMouseOver={changeFoundButton}
//                                 onMouseOut={initialFoundButton}>
//                             <span className={style.btnSpanWhite}>{foundBtn}</span>
//                         </button>
//                     </div>
//                 </div>
//                 <div className={'d-flex justify-content-center'}>
//                     <img src={dog} alt="dog"/>
//                 </div>
//             </div>
//             <div className={'col-10'}>
//                 <h4 className={`${style.textJoin} m-0 px-5`}>
//                     I'm okay,just want to
//                     <span className={style.join} onClick={() => setModalActive(true)}> join </span>
//                     the pawsome community!
//                 </h4>
//             </div>
//         </div>
//         <Modal active={modalActive} setActive={setModalActive} setPage={setPage}/>
//     </section>
// );