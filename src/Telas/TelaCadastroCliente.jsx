import { Container, Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import Pagina from "../templates/Pagina";
import FormularioCadCliente from "./Formularios/FormularioCadCliente";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { consultarClientes } from "../services/servicoClientes";


export default function TelaCadastroCliente(props) {

  const [exibirTabela, setExibirTabela] = useState(true);
  const [clientes, setClientes] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  // valores: ok, erro e processando
  const [situacao, setSituacao] = useState("ok");
  const [clienteSelecionado, setClienteSelecionado] = useState({
    nome: "",
    cpf: "",
    rg: "",
    sexo: "",
    telefone: "",
    email: "",
    cidade: "",
    estado: "",
    cep: "",
  });

  useEffect(() => {
    setSituacao("processando");
    consultarClientes().then(listaClientes => { setSituacao("ok"); setClientes(listaClientes); })
      .catch(erro => { setSituacao("erro"); console.error(erro.message); });
  }, []);
  if (situacao === "erro") {
    return (
      <Pagina>
        <Container className="mt-5">
          <h1 className="text-center">Tela de cadastro de Clientes</h1>
          <div>
            <Alert variant="danger"><h2>Erro ao consultar os clientes do backend!</h2></Alert>
          </div>
        </Container>
      </Pagina>
    )
  } else if (situacao === "processando") {
    return (
      <Pagina>
        <Container className="mt-5">
          <h1 className="text-center">Tela de cadastro de Clientes</h1>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Spinner animation="border" />
            <h2>Processando os clientes do backend...</h2>
          </div>
        </Container>
      </Pagina>
    )
  } else {
    return (
      <Pagina>
        <Container className="mt-5">
          <h1 className="text-center">Tela de cadastro de clientes</h1>
          {exibirTabela ? <TabelaClientes
            setExibirTabela={setExibirTabela}
            listaClientes={clientes}
            setListaClientes={setClientes}
            setClienteSelecionado={setClienteSelecionado}
            setModoEdicao={setModoEdicao} />
            : <FormularioCadCliente
              setExibirTabela={setExibirTabela}
              listaClientes={clientes}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
              clienteSelecionado={clienteSelecionado}
              setClienteSelecionado={setClienteSelecionado} />}
        </Container>
      </Pagina>
    )
  }
}