import React, {useState} from 'react';
import style from './modal_main.module.css';
import ModalFooterUp from "../ModalFooter/ModalFooterUp";
// import {useDispatch} from "react-redux";
// import {SET_USER_EMAIL, SET_USER_NAME, SET_USER_PASSWORD} from "../../../../../store/userRegistrationReducer";

const SignUpForm = () => {

    // const email = useSelector(state => state.email);
    // const password = useSelector(state => state.password);
    // const user_name = useSelector(state => state.user_name);

    // const dispatch = useDispatch();
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [passwordFirst, setPasswordFirst] = useState()
    const [passwordSecond, setPasswordSecond] = useState()

    // const compare = (passwordFirst, passwordSecond) => {
    //     if (passwordFirst !== passwordSecond) {
    //         alert("Passwords doesn't match")
    //     }
    //     dispatch({type: SET_USER_PASSWORD, payload: passwordSecond})
    // }


    return (
        <div>
            <div className={`${style.heightFormRegister} ${style.marginUpForm} row align-items-center`}>
                <div className={'col-6'}>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="name">Name:</label>
                        <input className={'col-8'} type="text" placeholder="Helen Johnson" name="name" autoComplete="on"
                               onChange={(e) => {
                                   setName(e.target.value)
                               }}
                               // required
                               // onBlur={(e) => {
                               //     dispatch({type: SET_USER_NAME, payload: name})
                               // }}
                        />
                    </div>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email" autoComplete="on"
                               onChange={(e) => {
                                   setEmail(e.target.value)
                               }}
                               // required
                               // onBlur={(e) => {
                               //     dispatch({type: SET_USER_EMAIL, payload: email})
                               // }}
                        />
                    </div>
                    <div className={'text-center'}>
                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw" autoComplete="on"
                               onChange={(e) => {
                                   setPasswordFirst(e.target.value)
                               }}/>
                    </div>
                    <div className={'text-center'}>
                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw" autoComplete="on"
                               onChange={(e) => {
                                   setPasswordSecond(e.target.value)
                               }}
                               // required
                               // onBlur={(e) => {
                               //     compare(passwordFirst, passwordSecond)
                               // }}
                        />
                    </div>
                </div>
                <div className={`${style.textPwd} col-6 row align-items flex-end mb-0`}>
                    <p>Password must have at least 8 characters with at least one Capital letter, at least one lower
                        case
                        letter and at least one number or special character.</p>
                    <p>Please re-enter your password</p>
                </div>
            </div>
            <hr className={`m-0`}/>
            <div className={`${style.heightFooter} row align-items-center`}>
                <ModalFooterUp/>
            </div>
        </div>
    );
};

export default SignUpForm;