import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
import {BrowserRouter} from "react-router-dom";
import MyRouter from "./router/MyRouter";
import { onAuthStateChanged} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {SET_LOCAL_USER} from "./store/userRegistrationReducer";
import {auth} from "./firebase/firebase-config";

function App() {

    const localUser = useSelector(state => state.userRegistration.localUser)
    const dispatch = useDispatch();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({type: SET_LOCAL_USER, payload: true})
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