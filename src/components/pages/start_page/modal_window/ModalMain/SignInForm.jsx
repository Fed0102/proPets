import React, {useState} from 'react';
import style from './modal_main.module.css';
import ModalFooterIn from "../ModalFooter/ModalFooterIn";


const SignInForm = () => {

    // const email = useSelector(state => state.email);
    // const password = useSelector(state => state.password);
    // const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    return (
        <div>
            <div className={`${style.heightFormAuth} row d-flex flex-column justify-content-center mb-4`}>
                <div className='col-6'>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email" autoComplete="on"
                               onChange={(e => {
                                   setEmail(e.target.value)
                               })}/>
                    </div>
                    <div className='text-center'>
                        <label className={'col-3 text-end'} htmlFor="password">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw" autoComplete="on"
                               onChange={(e => {
                                   setPassword(e.target.value)
                               })}/>
                    </div>
                </div>
            </div>

            <div className={`${style.forgotPwd} ${style.marginInForm} col-6 text-center`}>
                <a href='#'>Forgot password?</a>
            </div>
            <hr className={`m-0`}/>
            <div className={`${style.heightFooter} row align-items-center`}>
                <ModalFooterIn email={email} password={password}/>
            </div>
        </div>
    );
};

export default SignInForm;