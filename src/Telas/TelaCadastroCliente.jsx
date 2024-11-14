import { Container } from "react-bootstrap";
import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormularioCadCliente from "./Formularios/FormularioCadCliente";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { listaClientes } from "../dadosMocados/listaClientes";


export default function TelaCadastroCliente(props) {

  const [exibirTabela, setExibirTabela] = useState(true);
  const [clientes, setClientes] = useState(listaClientes);
  const [clienteSelecionado, setClienteSelecionado] = useState({
    nomeCliente: "",
    datanasc: "",
    cpf: "",
    rg: "",
    sexo: "",
    telCliente: "",
    emailCliente: "",
    cidade: "",
    estado: "",
    cep: "",
  });
  const [modoEdicao, setModoEdicao] = useState(false);

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