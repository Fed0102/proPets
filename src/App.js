import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
import {BrowserRouter} from "react-router-dom";
import MyRouter from "./router/MyRouter";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react";

function App() {

    let [localUser, setLocalUser] = useState(false);
    let test = false;
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            setLocalUser(true);
        }
    })

        if (localUser) {
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
                    <MyRouter user={localUser}/>
                </BrowserRouter>
            )
        }
}

export default App;