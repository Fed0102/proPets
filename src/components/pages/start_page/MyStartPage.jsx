import React from 'react';
import Start_one from "./Start_one/Start_one";
import Start_two from "./Start_two/Start_two";
import Start_three from "./Start_three/Start_three";
import Start_four from "./Start_four/Start_four";
import Start_footer from "./Start_footer/Start_footer";
// import Modal from "./modal_window/ModalHeader/Modal";

const StartPage = ({setPage}) => {
    return (
        <div>
            <Start_one setPage={setPage}/>
            <Start_two/>
            <Start_three/>
            <Start_four/>
            <Start_footer/>
            {/*<Modal/>*/}
        </div>
    );
};

export default StartPage;