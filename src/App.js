import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
import {BrowserRouter} from "react-router-dom";
import MyRouter from "./router/MyRouter";
import {onAuthStateChanged} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./firebase/firebase-config";
import {SET_USER} from "./store/userReducer";

function App() {

    const localUser = useSelector(state => state.user.email);
    // const userIn = localUser.email;
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