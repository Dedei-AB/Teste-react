import { useDespesas } from "./DespesasContexto";
import { useNavigate } from "react-router-dom";

function ButtonEditarDespesa({ index, despesaEditada, tipoDespesa }) {
  const { data, setData } = useDespesas();
  const navigate = useNavigate();

  const handleClick = () => {
    setData((despesa) => {
      if (tipoDespesa === "despesaVariavel") {
        const novaDespesa = [...despesa.despesaVariavel];
        novaDespesa[index] = despesaEditada;
        return { ...despesa, despesaVariavel: [...novaDespesa] };
      } else {
        const novaDespesa = [...despesa.despesaFixa];
        novaDespesa[index] = despesaEditada;
        return {
          ...despesa,
          despesaFixa: [...novaDespesa],
        };
      }
    });
    navigate("/");
  };

  return (
    <button className="concluido-adicionar-btn" onClick={handleClick}>
      Salvar
    </button>
  );
}

export default ButtonEditarDespesa;
