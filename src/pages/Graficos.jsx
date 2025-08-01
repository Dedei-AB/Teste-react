import "../css/Graficos.css";
import { useDespesas } from "../components/DespesasContexto";
import GraficoComparativo from "../components/GraficoComparativo";
import GraficoFixa from "../components/GraficoFixa";
import GraficoVariavel from "../components/GraficoVariavel";

export default function Graficos() {
  const { data, setData } = useDespesas();
  return (
    <div id="graficos-page">
      <h1>Gráficos de Despesas Fixas e Variáveis</h1>

      <div className="grafico-todos">
        <div className="grafico-individual">
          <GraficoComparativo
            despesasFixas={data.despesaFixa}
            despesasVariaveis={data.despesaVariavel}
          />
        </div>
        <div className="grafico-individual">
          <GraficoFixa despesasFixas={data.despesaFixa} />
        </div>
        <div className="grafico-individual">
          <GraficoVariavel despesasVariaveis={data.despesaVariavel} />
        </div>
      </div>
    </div>
  );
}
