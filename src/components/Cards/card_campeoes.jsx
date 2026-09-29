import "./Card.css";
export default function Campeao({ nome, classe, regiao, imagem, favorito, onAlterar }) {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <div className="tags">
        <span className="tag tag-regiao">{regiao}</span>
        <span className="tag tag-classe">{classe}</span>
      </div>
      <img src={imagem} alt={nome} />
      <button onClick={onAlterar}>
        {favorito ? "Favorito" : "Marcar como Favorito"}
      </button>
    </div>
  );
}