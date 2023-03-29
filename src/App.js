import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
// import MyStartPage from "./components/pages/start_page/MyStartPage";
import {BrowserRouter} from "react-router-dom";
// import {auth} from './firebase/firebase-config';
import MyRouter from "./router/MyRouter";
// import {useSelector} from "react-redux";
// import {getAuth} from "firebase/auth";
import {auth} from "./firebase/firebase-config";

function App() {

    if (auth) {
        return (
            <BrowserRouter>
                <MyHeader/>
                <MyBody/>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <MyHeader/>
                <MyRouter/>
            </BrowserRouter>
        )
    }
}
export default App;

// console.log(auth2);

// return (
//     <BrowserRouter>
//         <MyHeader/>
//         <MyRouter/>
//     </BrowserRouter>
// )

// const auth = useSelector(state => state.auth);