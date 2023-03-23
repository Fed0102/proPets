import React from 'react';
import love from "../../../../assets/png/love.png";
import style from './start_four.module.css';

const StartFour = () => {
    return (
        <section className={`${style.colorSection}`}>
            <div className={`row justify-content-center align-items-center pb-2 pt-2`}>
                <div className={'d-flex col-10 align-items-center'}>
                    <div className={`col-6`}>
                        <p className={`${style.aboutStyle}`}>Coming soon</p>
                    </div>
                    <div className={`row align-items-center col-6 justify-content-between`}>
                        <div className={`${style.widthInfo}`}>
                            <p className={`${style.textStyle}`}>We are planing to open a new service,<br/> where your
                                cats and dogs can find their love!</p>
                        </div>
                        <div className={`${style.logoLove} col-3`}>
                            <img src={love} alt="love"/>
                            <p className={`${style.pLove}`}>LOVE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartFour;

// const StartFour = () => {
//     return (
//         <section className={`${style.colorSection} container-fluid`}>
//             <div className={`row justify-content-center align-items-center pb-2 pt-2`}>
//                 <div className={'d-flex col-10 align-items-center'}>
//                     <div className={`col-6`}>
//                         <p className={`${style.aboutStyle}`}>Coming soon</p>
//                     </div>
//                     <div className={`row align-items-center col-6 justify-content-between`}>
//                         <div className={`${style.widthInfo}`}>
//                             <p className={`${style.textStyle}`}>We are planing to open a new service,<br/> where your
//                                 cats and dogs can find their love!</p>
//                         </div>
//                         <div className={`${style.logoLove} col-3`}>
//                             <img src={love} alt="love"/>
//                             <p className={`${style.pLove}`}>LOVE</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };