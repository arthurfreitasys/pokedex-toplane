export default function Campeao({ nome, classe, regiao, imagem, favorito, onFavoritar }) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>{regiao} {classe}</p>
      <img src={imagem} alt={nome} />
      <button onClick={onFavoritar}>
        {favorito ? "Favorito" : "Marcar como Favorito"}
      </button>
    </div>
  );
}