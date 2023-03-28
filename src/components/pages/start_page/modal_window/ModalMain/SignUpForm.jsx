import React from 'react';
import style from './modal_main.module.css';
import ModalFooterUp from "../ModalFooter/ModalFooterUp";
import {useDispatch, useSelector} from "react-redux";
import {EMAIL, PASSWORD, USER_NAME} from "../../../../../store/modalReducer";

const SignUpForm = () => {

    const email = useSelector(state => state.email);
    const password = useSelector(state => state.password);
    const user_name = useSelector(state => state.user_name);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={`${style.heightFormRegister} ${style.marginUpForm} row align-items-center`}>
                <div className={'col-6'}>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="name">Name:</label>
                        <input className={'col-8'} type="text" placeholder="Helen Johnson" name="name"
                        value={user_name} onChange={e=>dispatch({type:USER_NAME,payload:e.target.value})}/>
                    </div>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email"
                    value={email} onChange={e=>dispatch({type:EMAIL,payload:e.target.value})}/>
                    </div>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="password">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="password"
                        value={password} onChange={e=>dispatch({type:PASSWORD, payload:e.target.value})}/>
                    </div>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="password">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="password"
                               value={password} onChange={e=>dispatch({type:PASSWORD, payload:e.target.value})}/>
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