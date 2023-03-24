import "./App.css";
import MyHeader from "./components/header/head_body/MyHeader";
import MyBody from "./components/main_body/MyBody";
// import MyStartPage from "./components/pages/start_page/MyStartPage";

function App() {
  return (
    <div className={"App"}>
        <MyHeader/>
        {/*<MyStartPage/>*/}
        <MyBody/>
    </div>
  );
}

export default App;
