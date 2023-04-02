import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
import {BrowserRouter} from "react-router-dom";
import MyRouter from "./router/MyRouter";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase/firebase-config";
import {useState} from "react";

function App() {

    const [userAuth, setUserAuth] = useState(false);

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
        }
    });

    if (userAuth) {
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