import TelaCadastroProduto from "./Telas/TelaCadastroProduto.jsx";
import TelaCadastroCliente from "./Telas/TelaCadastroCliente.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tela404 from "./Telas/Tela404.jsx";
import TelaMenu from "./Telas/TelaMenu.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<TelaMenu/>}></Route>
          <Route path="/cadastroProdutos" element={<TelaCadastroProduto />}></Route>
          <Route path="/cadastroClientes" element={<TelaCadastroCliente />}></Route>
          <Route path="*" element={<Tela404/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
