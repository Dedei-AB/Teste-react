import { Outlet } from "react-router-dom";
import "../css/Gerenciador.css";
import AddDespesa from "../components/AddDespesa";

export default function Gerenciador() {
  return (
    <div id="gerenciador-page">
      <h1>Gerenciar Despesa:</h1>
      <div className="componentes">
        <Outlet />
        <AddDespesa />
      </div>
    </div>
  );
}
