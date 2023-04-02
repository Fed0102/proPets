import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
import {BrowserRouter} from "react-router-dom";
import MyRouter from "./router/MyRouter";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase/firebase-config";
import {useState} from "react";
import Loader from "./components/UI/loader/Loader";

function App() {

    const [userAuth, setUserAuth] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            localStorage.setItem('userInfo', JSON.stringify(
                {
                    uid: '',
                    name: '',
                    photo: '',
                    email: '',
                    phone: '',
                    facebook: ''
                }
            ));
            setUserAuth(true);
        } else {
            setUserAuth(false);
        }
    });

    if (userAuth === null) {
        return <Loader/>
    } else if (userAuth) {
        return (
            <BrowserRouter>
                <MyHeader user={userAuth}/>
                <MyBody/>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <MyHeader user={userAuth}/>
                <MyRouter user={userAuth}/>
            </BrowserRouter>
        )
    }
}

export default App;