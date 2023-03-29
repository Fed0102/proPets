import React from 'react';
import LostInputs from "../../UI/lost_found_inputs/lost_found_inputs";
// import LostCard from "../../UI/lost_found_card/lost_found_card";
import style from '../../UI/lost_found_inputs/lost_found_inputs.module.css';

const Lost = () => {
    return (
        <div className={`${style.myLostFoundPostsDiv} justify-content-center align-content-center d-flex`}>
            <div>
                <LostInputs/>
                {/*<LostCard/>*/}
            </div>
        </div>
    );
};

export default Lost;