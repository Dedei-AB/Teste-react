import "../css/Nav.css";
import logo from "../assets/images/logo_-_Copia-removebg-preview.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link className="link-nav" to="/">
        <img
          src={logo}
          alt="Gerenciamento de Despesas"
          className="logo"
          onClick={() => (window.location.href = "#home-page")}
        />
      </Link>
      <div className="pages">
        <Link className="link-nav" to="/">
          Início
        </Link>
        <Link className="link-nav" to="/gerenciar">
          Gerenciar
        </Link>
        <Link className="link-nav" to="/graficos">
          Graficos
        </Link>
      </div>
    </nav>
  );
}
