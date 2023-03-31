import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "./modal_footer.module.css";
import {SET_VISIBLE_MODAL} from "../../../../../store/modalReducer";
import paw from "../../../../../assets/png/paw.png";
import {registration} from "../../../../../firebase/auth-service";
import {SET_USER_NAME} from "../../../../../store/userReducer";
import {updateProfile} from "firebase/auth";
import {auth} from "../../../../../firebase/firebase-config";

const ModalFooterUp = ({userName, userEmail, password}) => {

    // const email = useSelector(state => state.email)
    // const password = useSelector(state => state.password)
    // const dispatch = useDispatch();

    const dispatch = useDispatch();

    return (
        <div className='row'>
            <div className='col-6'>
                <p className={style.agreeText}>By clicking "Submit", you agree to us processing your<br/> information in
                    accordance with <a href={'#'}>these terms</a>.</p>
            </div>
            <div className={'col-6 d-flex justify-content-evenly'}>
                <button onClick={() => dispatch({type:SET_VISIBLE_MODAL, payload: false})} className={style.btnCancel}>
                    Cancel
                </button>
                <button className={style.btnSubmit}
                        onClick={() => {
                            dispatch({type: SET_VISIBLE_MODAL, payload: false});
                            dispatch({type: SET_USER_NAME, payload: userName});
                            registration(userEmail, password);
                        }
                        }>
                    <img className={style.paw} src={paw} alt={paw}/>
                    <span className='m-auto'>Submit</span>
                </button>
            </div>
        </div>
    );
};

export default ModalFooterUp;