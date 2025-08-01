import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Api.css";

function ConversorMoeda({ valorParaConverter }) {
  const from = "BRL";
  const [to, setTo] = useState("USD");
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    const valorNumerico = parseFloat(
  String(valorParaConverter).replace(",", ".")
);


    if (!isNaN(valorNumerico) && valorNumerico > 0) {
      converterMoeda(valorNumerico);
    } else {
      setResultado(null);
    }
  }, [valorParaConverter, to]);

  const converterMoeda = async (valorNumerico) => {
    try {
const res = await axios.get("https://api.apilayer.com/exchangerates_data/convert", {
  params: {
    from,
    to,
    amount: valorNumerico,
  },
  headers: {
    apikey: "TS2RoubKEdbX2mgLL0Xkoat9UVsO4jJq",
  },
});

      const resultado = res.data?.result;

      if (typeof resultado === "number") {
        setResultado(resultado.toFixed(2));
      } else {
        console.error("Valor inesperado:", res.data);
        setResultado("Valor inválido ou não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao converter moeda:", error);
      setResultado("Erro na conversão.");
    }
  };

  return (
    <div className="api-despesa">
      <h2>Conversor de Moedas</h2>
      <p>Valor: {valorParaConverter}</p>
      <p>{from}</p>
      <span> para </span>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>

      {resultado && typeof resultado === "string" && (
        <p>
          Resultado: {resultado} {to}
        </p>
      )}
    </div>
  );
}

export default ConversorMoeda;