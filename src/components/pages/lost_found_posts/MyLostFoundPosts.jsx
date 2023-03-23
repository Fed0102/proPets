import React from 'react';
import LostInputs from "../../UI/lost_found_inputs/lost_found_inputs";
import LostCard from "../../UI/lost_found_card/lost_found_card";

const Lost = () => {
    return (
        <div className={`d-flex`}>
            <div>
                <LostInputs/>
                <LostCard/>
            </div>
        </div>
    );
};

export default Lost;