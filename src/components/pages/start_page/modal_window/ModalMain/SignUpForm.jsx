import React from 'react';
import style from './modal_main.module.css';
import ModalFooter from "../ModalFooter/ModalFooter";

const SignUpForm = ({setActive, setPage}) => {
    return (
        <div>
            <div className={`${style.heightFormRegister} ${style.marginUpForm} row align-items-center`}>
                <div className={'col-6'}>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="name">Name:</label>
                        <input className={'col-8'} type="text" placeholder="Helen Johnson" name="name"/>
                    </div>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email"/>
                    </div>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="password">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="password"/>
                    </div>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="password">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="password"/>
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
                <ModalFooter setActive={setActive} setPage={setPage}/>
            </div>
        </div>
    );
};

export default SignUpForm;