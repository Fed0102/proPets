import React, {useState} from 'react';
import style from './modal_main.module.css';
import ModalFooterIn from "../ModalFooter/ModalFooterIn";
import {useDispatch, useSelector} from "react-redux";
import {EMAIL, PASSWORD} from "../../../../../store/modalReducer";


const SignInForm = () => {

    const email = useSelector(state => state.email);
    const password = useSelector(state => state.password);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={`${style.heightFormAuth} row d-flex flex-column justify-content-center mb-4`}>
                <div className='col-6'>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email"
                               value={email} onChange={e => dispatch({type:EMAIL,payload: e.target.value})}/>
                    </div>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="password">Password:</label>
                        <input className='col-8' type="password" placeholder="*****************" name="password"
                        value={password} onChange={e=>dispatch({type:PASSWORD,payload: e.target.value})}/>
                    </div>
                </div>
            </div>

            <div className={`${style.forgotPwd} ${style.marginInForm} col-6 text-center`}>
                <a href='#'>Forgot password?</a>
            </div>
            <hr className={`m-0`}/>
            <div className={`${style.heightFooter} row align-items-center`}>
                <ModalFooterIn/>
            </div>
        </div>
    );
};

export default SignInForm;