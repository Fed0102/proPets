import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
import {useState} from "react";
import MyStartPage from "./components/pages/start_page/MyStartPage";

function App() {

    const [page, setPage] = useState(true);

    const seePage = (page) => {
        if (page) {
            return (
                <div>
                    <MyHeader/>
                    <MyStartPage setPage={setPage}/>
                </div>
            )
        }else{
            return (
                <div>
                    <MyHeader/>
                    <MyBody/>
                </div>
            )
        }
    }

    return (
        <div>
            {seePage(page)}
        </div>
    )
    ;
// =======
// import React from "react";
// // import MyStartPage from "./components/pages/start_page/MyStartPage";
//
// function App() {
//     return (
//         <div className={"App"}>
//             <MyHeader/>
//             {/*<MyStartPage/>*/}
//             <MyBody/>
//         </div>
//     );
// >>>>>>> main
}

export default App;


// return (
//     <div className={"App"}>
//         <MyHeader/>
//         {/*<MyStartPage/>*/}
//         <MyBody/>
//     </div>
// );
// }