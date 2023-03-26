import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
import MyStartPage from "./components/pages/start_page/MyStartPage";
import {BrowserRouter} from "react-router-dom";
import {useSelector} from "react-redux";

function App() {

    const auth = useSelector(state => state.auth)

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
                <MyStartPage/>
            </BrowserRouter>
        )
    }
}

export default App;
