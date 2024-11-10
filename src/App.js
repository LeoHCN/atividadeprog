import TelaCadastroProduto from "./Telas/TelaCadastroProduto.jsx";
import TelaCadastroCliente from "./Telas/TelaCadastroCliente.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaCadastroProduto />}></Route>
          <Route path="/" element={<TelaCadastroCliente />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
