import { useState, useEffect } from "react";
import DetalhesDespesas from "../components/DetalhesDespesas";
import { useParams } from "react-router-dom";
import { useDespesas } from "../components/DespesasContexto";
import "../css/DetalhesDespesas.css";

function Detalhes() {
  const { id } = useParams();
  const despesaSelecionada = id.split("-");
  const { data, setData } = useDespesas();
  const [despesa, setDespesa] = useState(null);

  useEffect(() => {
    const tipo = despesaSelecionada[0];
    const indice = Number(despesaSelecionada[1]);

    if (data?.[tipo]?.[indice]) {
      setDespesa(data[tipo][indice]);
    }
  }, [data, despesaSelecionada]);

  return (
    <div className="detalhes-page">
      {despesa ? (
        <DetalhesDespesas despesa={despesa} />
      ) : (
        <p>Carregando detalhes...</p>
      )}
    </div>
  );
}

export default Detalhes;
