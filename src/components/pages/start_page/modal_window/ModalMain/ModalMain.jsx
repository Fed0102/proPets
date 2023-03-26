import React, {useState} from 'react';
import style from './modal_main.module.css';
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const ModalMain = () => {

    const [state, setState] = useState(true)

    const signInOrUp = (state) => {
        if (state) {
            return <SignUpForm/>
        } else {
            return <SignInForm/>
        }
    }
    return (
        <div>
            <button className={state ? `${style.button} ${style.active}` : `${style.button}`} onClick={() => setState(true)}>
                Sign up
            </button>
            <button className={state ? `${style.button}` : `${style.button} ${style.active}`} onClick={() => setState(false)}>
                Sign in
            </button>
            {signInOrUp(state)}
        </div>
    );
};

export default ModalMain;