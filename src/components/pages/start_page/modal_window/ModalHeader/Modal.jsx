import React from 'react';
import style from './modal_header.module.css';
import close from '../../../../../assets/png/close.png';
import logo from '../../../../../assets/svg/logo.svg';
import facebook from '../../../../../assets/png/facebook.png';
import ModalMain from "../ModalMain/ModalMain";

const Modal = ({active, setActive}) => {

    return (
        <div className={active ? `${style.modal} ${style.modalActive}` : `${style.modal}`}>
            <div className={active ? `${style.modalContent} ${style.modalContentActive}` : `${style.modalContent}`}>
                <div className={'d-flex justify-content-between'}>
                    <img className={style.logoHeader} src={logo} alt="logo"/>
                    <img onClick={() => setActive(false)} className={style.close} src={close} alt="close"/>
                </div>
                <div className={'d-flex align-items-center mb-3'}>
                    <h2 className={`col-7 ${style.title}`}><span className='fw-bold'>Welcome! </span>Please sign in /
                        sign up to continue or</h2>
                    <div className='col-5'>
                        <button className={style.btnFacebook}>
                            <img className={style.fb} src={facebook} alt={'facebook'}/>
                            <span className='m-auto'>Enter with Facebook</span>
                        </button>
                    </div>
                </div>
                <ModalMain/>
            </div>
        </div>
    );
};

export default Modal;

// return (
//     <div className={`${style.modal} container-fluid pt-3`}>
//         <div>
//             <div className={'d-flex justify-content-between'}>
//                 <img className={style.logoHeader} src={logo} alt="logo"/>
//                 <img className={style.close} src={close} alt="close"/>
//             </div>
//             <div className={'d-flex align-items-center mb-3'}>
//                 <h2 className={`col-7 ${style.title}`}><span className='fw-bold'>Welcome! </span>Please sign in /
//                     sign up to continue or</h2>
//                 <div className='col-5'>
//                     <button className={style.btnFacebook}>
//                         <img className={style.fb} src={facebook} alt={'facebook'}/>
//                         <span className='m-auto'>Enter with Facebook</span>
//                     </button>
//                 </div>
//             </div>
//             <ModalMain/>
//         </div>
//     </div>
// );

