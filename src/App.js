import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
// import {useState} from "react";
import MyStartPage from "./components/pages/start_page/MyStartPage";
import {useSelector} from "react-redux";
// import Btn_header_start from "./components/UI/btn_header_start/btn_header_start";
// import Btn_header_main from "./components/UI/btn_header_main/btn_header_main";
import Modal from "./components/pages/start_page/modal_window/ModalHeader/Modal";

function App() {

    // const [page, setPage] = useState(true);

    const page = useSelector(state => state.page);
    const modal = useSelector(state => state.modal);

    switch (page) {
        case 'HomePage':
            return (
                <div>
                    <MyHeader/>
                    <MyBody/>
                </div>
            )
        default:
            return (
                <div>
                    <MyHeader/>
                    <MyStartPage/>
                    <Modal modal={modal}/>
                </div>
            )
    }

    // const seePage = (page) => {
    //     if (page) {
    //         return (
    //             <div>
    //                 <MyHeader/>
    //                 <MyStartPage/>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div>
    //                 <MyHeader/>
    //                 <MyBody/>
    //             </div>
    //         )
    //     }
    // }
    //
    // return (
    //     <div>
    //         {seePage(page)}
    //     </div>
    // );
}

export default App;
