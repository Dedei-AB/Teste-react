import { useDespesas } from "./DespesasContexto";
import { useNavigate } from "react-router-dom";

function ConcluidoAdicionar({ novaDespesa, tipoDespesa }) {
  const { data, setData } = useDespesas();
  const navigate = useNavigate();

  const camposValidos = () => {
    if (!novaDespesa) return false;
    if (
      !novaDespesa.nome ||
      !novaDespesa.valor ||
      !novaDespesa.data ||
      !novaDespesa.categoria ||
      !tipoDespesa
    )
      return false;
    return true;
  };

  const handleClick = () => {
    if (!camposValidos()) {
      alert("Por favor, preencha os campos obrigatórios: nome, valor e data.");
      return;
    }

    setData((prev) => {
      if (tipoDespesa === "despesaVariavel") {
        return {
          ...prev,
          despesaVariavel: [...prev.despesaVariavel, novaDespesa],
        };
      } else {
        return {
          ...prev,
          despesaFixa: [...prev.despesaFixa, novaDespesa],
        };
      }
    });

    navigate("/");
  };

  return (
    <button
      className="concluido-adicionar-btn"
      onClick={handleClick}
      disabled={!camposValidos()}
    >
      Adicionar
    </button>
  );
}

export default ConcluidoAdicionar;
