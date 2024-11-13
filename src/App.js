import TelaCadastroProduto from "./Telas/TelaCadastroProduto.jsx";
import TelaCadastroCliente from "./Telas/TelaCadastroCliente.jsx";
import Tela404 from "./Telas/Tela404.jsx";
import TelaMenu from "./Telas/TelaMenu.jsx";
import TelaLogin from "./Telas/TelaLogin.jsx";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, createContext } from "react";

export const ContextoUsuario = createContext({});

function App() {
  const [usuario, setUsuario] = useState({ "email": "teste@teste.com", "logado": false });
  if (usuario.logado) {
    return (
      <div className="App">
        <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<TelaMenu />}></Route>
              <Route path="/cadastroProdutos" element={<TelaCadastroProduto />}></Route>
              <Route path="/cadastroClientes" element={<TelaCadastroCliente />}></Route>
              <Route path="/login" element={<TelaLogin />}></Route>
              <Route path="*" element={<Tela404 />}></Route>
            </Routes>
          </BrowserRouter>
        </ContextoUsuario.Provider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
        <TelaLogin />
        </ContextoUsuario.Provider>
      </div>
    );
  }
}

export default App;
