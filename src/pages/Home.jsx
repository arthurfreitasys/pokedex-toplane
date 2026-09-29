import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="pagina home">
            <h2>Bem-vindo à Top Lane</h2>
            <p>
                Explore os campeões da rota do topo de League of Legends 
                e monte a sua lista de favoritos.
            </p>
            <Link to="/campeoes" className="botao">Ver campeões</Link>
        </div>
    );
}