import React, {useState} from 'react';
import style from './modal_main.module.css';
import ModalFooterUp from "../ModalFooter/ModalFooterUp";
import {useDispatch, useSelector} from "react-redux";

const SignUpForm = () => {

        const dispatch = useDispatch();
        const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

        const [email, setEmail] = useState();
        let em = email;
        const [passwordFirst, setPasswordFirst] = useState("");
        let pasF = passwordFirst;
        const [passwordSecond, setPasswordSecond] = useState("");
        let pasS = passwordSecond;
        const [passwordFinal, setPasswordFinal] = useState("");
        const [passwordMessage, setPasswordMessage] = useState("");

        const compare = () => {

            let valid = re.test(em)

            if (pasF.length === 0 && pasS.length === 0 && em.length === 0) {
                setPasswordMessage("");
            } else if (!valid) {
                setPasswordMessage("Incorrect email");
            } else if (pasF !== pasS) {
                setPasswordMessage("Password mismatch");
                setPasswordFinal("");
            } else if (pasS.length < 8) {
                setPasswordMessage("Password is too short");
                setPasswordFinal("");
            } else {
                setPasswordMessage("");
                setPasswordFinal(pasS);
            }
        }


        return (
            <>
                <div className={`${style.heightFormRegister} ${style.marginUpForm} row align-items-center`}>
                    <div className={'col-6'}>
                        <div className='text-center'>
                            <label className={'col-3 text-end'} htmlFor="name">Name:</label>
                            <input className={'col-8'} type="text" placeholder="Helen Johnson" name="name" autoComplete="on"
                                   onChange={(e) => {
                                       dispatch({type: 'SET_USER_NAME', payload: e.target.value});
                                   }}
                                   required
                            />
                        </div>
                        <div className='text-center'>
                            <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                            <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email"
                                   autoComplete="on"
                                   onChange={(e) => {
                                       setEmail(e.target.value);
                                       em = e.target.value;
                                       compare();
                                   }}
                                   required
                            />
                        </div>
                        <div className={'text-center'}>
                            <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                            <input className={'col-8'} type="password" placeholder="*****************" name="psw"
                                   autoComplete="on"
                                   onChange={(e) => {
                                       setPasswordFirst(e.target.value);
                                       pasF = e.target.value;
                                       compare();
                                   }}
                            />
                        </div>
                        <div className={'text-center'}>
                            <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                            <input className={'col-8'} type="password" placeholder="*****************" name="psw"
                                   autoComplete="on"
                                   onChange={(e) => {
                                       setPasswordSecond(e.target.value);
                                       pasS = e.target.value;
                                       compare();
                                   }}
                            />
                        </div>
                        <div className={'text-center text-danger'}>
                            {passwordMessage}
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
                    <ModalFooterUp userEmail={email} password={passwordFinal}/>
                </div>
            </>
        );
    }
;

export default SignUpForm;