import React from 'react';
import style from './modal_main.module.css';
import ModalFooter from "../ModalFooter/ModalFooter";


const SignInForm = ({setActive}) => {
    return (
        <div>
            <div className={`${style.heightFormAuth} row d-flex flex-column justify-content-center mb-4`}>
                <div className='col-6'>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email"/>
                    </div>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="password">Password:</label>
                        <input className='col-8' type="password" placeholder="*****************" name="password"/>
                    </div>
                </div>
            </div>

            <div className={`${style.forgotPwd} ${style.marginInForm} col-6 text-center`}>
                <a href='#'>Forgot password?</a>
            </div>
            <hr className={`m-0`}/>
            <div className={`${style.heightFooter} row align-items-center`}>
                <ModalFooter setActive={setActive}/>
            </div>
        </div>
    );
};

export default SignInForm;