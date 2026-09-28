import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div>
      <h2>Bem-vindo a TopLane</h2>
      <p>Explore os campeões</p>
      <Link to="/campeoes">Ver Campeões</Link>
    </div>
  );
}