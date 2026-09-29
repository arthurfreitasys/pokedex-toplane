import {Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home"
import Campeoes from "../src/pages/Campeoes"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App(){
    return (
        <div className="app">
        <Header/>
        <main className="conteudo">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/campeoes" element={<Campeoes />}></Route>
        </Routes>
        </main>
        <Footer/>
        </div>
    );
}