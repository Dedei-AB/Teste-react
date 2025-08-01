import { Link } from "react-router-dom";
import DespesaItem from "./DespesaItem";

function DespesaListCategoria({ despesas, tipoDespesa }) {
  return (
    <>
      <div className="container-despesas">
        {despesas.map((item, index) => (
          <div key={index} className="despesa-item-categoria">
            <DespesaItem id={index} dados={item} tipoDespesa={tipoDespesa} />
          </div>
        ))}
        <Link to={"/gerenciar"}>
          <div className="despesa-item" id="adicionar-despesa">
            +
          </div>
        </Link>
      </div>
    </>
  );
}

export default DespesaListCategoria;
