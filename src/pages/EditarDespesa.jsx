import { useParams } from "react-router-dom";
import { useDespesas } from "../components/DespesasContexto";
import EditarDespesaFixa from "../components/EditarDespesaFixa";
import EditarDespesaVariavel from "../components/EditarDespesaVariavel";

function EditarDespesa() {
  const { data, setData } = useDespesas();
  const { id } = useParams();
  const posicao = Number(id.slice(-1));

  if (id.includes("despesaFixa")) {
    return (
      <EditarDespesaFixa
        despesa={data.despesaFixa[Number(posicao)]}
        index={posicao}
      />
    );
  } else {
    return (
      <EditarDespesaVariavel
        despesa={data.despesaVariavel[Number(posicao)]}
        index={posicao}
      />
    );
  }
}

export default EditarDespesa;
