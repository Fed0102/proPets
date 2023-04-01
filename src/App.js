import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
import {BrowserRouter} from "react-router-dom";
import MyRouter from "./router/MyRouter";
import {onAuthStateChanged, updateProfile} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./firebase/firebase-config";
import {SET_USER} from "./store/userReducer";
import {useEffect} from "react";

function App() {

    const localEmail = useSelector(state => state.user.email);
    const localName = useSelector(state => state.user.name);
    const localPhone = useSelector(state => state.user.phone);
    const localFb = useSelector(state => state.user.fbLink);
    const localPhoto = useSelector(state => state.user.photoURL);
    const dispatch = useDispatch();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch({
                type: SET_USER, payload: {
                    email: user.email,
                    name: user.displayName,
                    phone: user.phoneNumber,
                    fbLink: "",
                    photoURL: user.photoURL
                }
            });
        }
    });

    useEffect(() => {
        updateProfile(auth.currentUser, {
            displayName: localName
        }).then()
            .catch(error => {
                console.log(error);
            })
    }, []);


    if (localEmail) {
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
                <MyRouter user={localEmail}/>
            </BrowserRouter>
        )
    }
}

export default App;