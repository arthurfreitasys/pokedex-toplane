import Campeao from '../components/Cards/card_campeoes'
import campeoes from "../data/campeoes.json"
import BackButton from '../components/BackButton/BackButton';
import { useState } from 'react';

export default function Campeoes() {
    const [favoritos, setFavoritos] = useState([]);

    function alternarFavorito(id) {
        if (favoritos.includes(id)) {
            setFavoritos(favoritos.filter((f) => f !== id));
        } else {
            setFavoritos([...favoritos, id]);
        }
    }
    return (
        <div>
            <h2>Total: {favoritos.length}</h2>
            <BackButton />
            {campeoes.map((c) => (
                <Campeao key={c.id} nome={c.nome} regiao={c.regiao} classe={c.classe} imagem={c.imagem} favorito={favoritos.includes(c.id)} onAlterar={() => alternarFavorito(c.id)}
                />
            ))}
        </div>
    );
}