import { useState } from "react";
import ConcluidoAdicionar from "./ConcluidoAdicionar";
import "../css/Gerenciador.css";

function AddDespesa() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [periodicidade, setPeriodicidade] = useState("");
  const [tipoDespesa, setTipoDespesa] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <div className="container-gerenciar-despesa">
      <h1 id="titulo-adicionar-despesa">Adicionar Despesa:</h1>
      <div className="container-gerenciar-despesa-inputs">
        <div className="despesa-input">
          <h2>Nome</h2>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="despesa-input">
          <h2>Valor</h2>
          <input
            type="number"
            min="0"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <div className="despesa-input">
          <h2>Data</h2>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className="despesa-input">
          <h2>Tipo de Despesa</h2>
          <select
            name="tipo-despesa"
            id="tipo-despesa"
            onChange={(e) => setTipoDespesa(e.target.value)}
            value={tipoDespesa}
          >
            <option value="">Selecione</option>
            <option value="despesaFixa">Despesa fixa</option>
            <option value="despesaVariavel">Despesa variável</option>
          </select>
        </div>

        {tipoDespesa === "despesaFixa" && (
          <div className="despesa-input">
            <h2>Periodicidade</h2>
            <select
              value={periodicidade}
              onChange={(e) => setPeriodicidade(e.target.value)}
              name="periodicidade"
              id="periodicidade-despesa"
            >
              <option value="semana">Semana</option>
              <option value="mês">Mês</option>
              <option value="ano">Ano</option>
            </select>
          </div>
        )}

        <div className="despesa-input">
          <h2>Descrição</h2>
          <textarea
            name="descricao-despesa"
            id="descricao-despesa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>

        <div className="despesa-input">
          <h2>Categoria</h2>
          <select
            name="categoria-despesa"
            id="categoria-despesa"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Assinatura">Assinatura</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Moradia">Moradia</option>
            <option value="Saúde">Saúde</option>
          </select>
        </div>

        <div className="despesa-input">
          <ConcluidoAdicionar
            novaDespesa={
              tipoDespesa == "despesaFixa"
                ? {
                    nome,
                    valor: Number(valor),
                    data,
                    periodicidade,
                    descricao,
                    categoria,
                  }
                : {
                    nome,
                    valor: Number(valor),
                    data,
                    descricao,
                    categoria,
                  }
            }
            tipoDespesa={tipoDespesa}
            onClick={() => {
              setData("");
              setDescricao("");
              setNome("");
              setPeriodicidade("");
              setValor("");
              setCategoria("");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AddDespesa;
