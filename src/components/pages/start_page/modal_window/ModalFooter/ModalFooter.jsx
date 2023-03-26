import React from 'react';
import style from "./modal_footer.module.css";
import paw from "../../../../../assets/png/paw.png";
import {useDispatch} from "react-redux";
import {SET_CHANGE_PAGE, SET_VISIBLE_MODAL} from "../../../../../store/modalReducer";
// import {setVisibleModalAction} from "../../../../../store/actions";

const ModalFooterUp = () => {

    const dispatch = useDispatch();

    return (
        <div className='row'>
            <div className='col-6'>
                <p className={style.agreeText}>By clicking "Submit", you agree to us processing your<br/> information in
                    accordance with <a href={'#'}>these terms</a>.</p>
            </div>
            <div className={'col-6 d-flex justify-content-evenly'}>
                <button onClick={() => dispatch({type: SET_VISIBLE_MODAL, payload: false})} className={style.btnCancel}>
                    Cancel
                </button>
                <button className={style.btnSubmit} onClick={() => dispatch({type:SET_CHANGE_PAGE, payload: true})}>
                    <img className={style.paw} src={paw} alt={paw}/>
                    <span className='m-auto'>Submit</span>
                </button>
            </div>
        </div>
    );
};

export default ModalFooterUp;