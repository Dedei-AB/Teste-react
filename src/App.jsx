import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Gerenciador from "./pages/Gerenciador";
import Graficos from "./pages/Graficos";
import EditarDespesa from "./pages/EditarDespesa";
import { DespesasProvider } from "./components/DespesasContexto";
import Detalhes from "./pages/Detalhes";
import DetalhesDespesas from "./components/DetalhesDespesas";

function App() {
  return (
    <DespesasProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes" element={<Detalhes />}>
            <Route path=":id" element={<DetalhesDespesas />} />
          </Route>
          <Route path="/gerenciar" element={<Gerenciador />}>
            <Route path=":id" element={<EditarDespesa />} />
          </Route>
          <Route path="/graficos" element={<Graficos />} />
        </Routes>
      </Router>
    </DespesasProvider>
  );
}

export default App;
