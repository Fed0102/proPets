import React from 'react';
import search from '../../../../assets/png/search.png';
import dog from '../../../../assets/png/dog.png';
import style from './start_one.module.css';
import {useDispatch, useSelector} from "react-redux";
import {SET_CHANGE_FOUND_BTN, SET_CHANGE_LOST_BTN, SET_VISIBLE_MODAL} from "../../../../store/modalReducer";

const StartOne = () => {

    // const [modalActive, setModalActive] = useState(true);

    // const modal = useSelector(state => state.modal)
    const {modal} = useSelector(state => state);
    // const foundBtn = useSelector(state=> state.foundBtn);
    const dispatch = useDispatch();

    return (
        <section>
            <div className={style.mainDiv}>
                <div>
                    <div className={style.welcomeTextSize}>
                        <h1 className={style.pText}>Welcome to your <span
                            className={style.colorSpanText}>pawfessional</span> community</h1>
                    </div>
                    <div>
                        <button className={style.btnLostPet} onMouseOver={()=>dispatch({type:SET_CHANGE_LOST_BTN, payload: 'Click to find!'})}
                                onMouseOut={()=>dispatch({type:SET_CHANGE_LOST_BTN, payload: 'I lost my pet!'})}
                                onClick={() => dispatch({type: SET_VISIBLE_MODAL, payload: true})}>
                            <div className={style.search}>
                                <span className={style.btnSpan}>{modal.lostBtn}</span>
                                <img src={search} alt="search"/>
                            </div>
                        </button>
                        <button className={style.btnFoundPet} onMouseOver={() => dispatch({type:SET_CHANGE_FOUND_BTN, payload: 'What to do?'})}
                                onMouseOut={()=>dispatch({type:SET_CHANGE_FOUND_BTN, payload: 'I found a pet!'})}
                                onClick={() => dispatch({type: SET_VISIBLE_MODAL, payload: true})}>
                            <span className={style.btnSpanWhite}>{modal.foundBtn}</span>
                        </button>
                    </div>

                    <div className={style.divJoin}>
                        <h4>
                            I'm okay, just want to
                            <span className={style.join}
                                  onClick={() => dispatch({type: SET_VISIBLE_MODAL, payload: true})}> JOIN </span>
                            the pawsome community!
                        </h4>
                    </div>
                </div>

                <div className={style.imgDiv}>
                    <img src={dog} alt="dog"/>
                </div>
            </div>
        </section>
    );
};

export default StartOne;
