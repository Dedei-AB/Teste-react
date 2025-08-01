import { useState } from "react";
import ButtonEditarDespesa from "../components/ButtonEditarDespesa";
import "../css/Gerenciador.css";

function EditarDespesaFixa({ despesa, index }) {
  const [nome, setNome] = useState(despesa.nome);
  const [valor, setValor] = useState(despesa.valor);
  const [data, setData] = useState(despesa.data);
  const [periodicidade, setPeriodicidade] = useState(despesa.periodicidade);
  const [descricao, setDescricao] = useState(despesa.descricao);
  const [categoria, setCategoria] = useState(despesa.categoria);

  return (
    <div className="container-gerenciar-despesa">
      <h1 id="titulo-gerenciar-despesa">Editar Despesa:</h1>
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
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}
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
          <ButtonEditarDespesa
            index={index}
            despesaEditada={{
              nome,
              valor: Number(valor),
              data,
              periodicidade,
              descricao,
              categoria,
            }}
            tipoDespesa={"despesaFixa"}
          />
        </div>
      </div>
    </div>
  );
}

export default EditarDespesaFixa;
