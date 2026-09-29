import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return <button className="botao-voltar" onClick={() => navigate(-1)}>← Voltar</button>;
}