import {Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home"
import Campeoes from "../src/pages/Campeoes"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App(){
    return (
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/campeoes" element={<Campeoes />}></Route>
        </Routes>
        <Footer/>
        </>

    );
}