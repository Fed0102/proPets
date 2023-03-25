import React from 'react';
import style from './start_two.module.css';

const StartTwo = () => {
    return (
        <section className={style.start_two}>
            <div className={style.pDiv}>
                <p>Our fluffy space for lovers, admirers, dads and<br/> moms of our four-legged, winged, tailed guys.</p>
            </div>
        </section>
    );
};

export default StartTwo;

// return (
//     <section className={`${style.tagline} container-fluid mb-5 d-flex`}>
//         <div className={`row justify-content-center align-content-center`}>
//             <p className={`col-6`}>Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed guys.</p>
//         </div>
//     </section>
// );