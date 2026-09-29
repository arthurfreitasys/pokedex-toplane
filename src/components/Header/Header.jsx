import {Link} from "react-router-dom";
import "./Header.css";

export default function Header(){
    return(
        <header className="header">
            <h1>TopLane</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/campeoes">Campeões</Link>
            </nav>
        </header>
    );
}