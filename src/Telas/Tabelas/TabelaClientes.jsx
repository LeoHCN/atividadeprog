import { Container, Table, Button } from "react-bootstrap";

export default function TabelaClientes(props) {

  function apagarCliente(cpf) {
    if (window.confirm("Tem certeza que deseja apagar o cliente?")) {
      const listaNova = props?.listaClientes.filter((cliente) => {
        return cliente.cpf != cpf;
      });
      props.setListaClientes(listaNova);
    }
  };

  function escolherClienteEdicao(cliente) {
    props.setClienteSelecionado(cliente);
    props.setModoEdicao(true);
    props.setExibirTabela(false);
  }

  return (
    <Container>
      <Button className="m-2" variant="primary mt-3 mb-3" onClick={
        () => {
          props.setExibirTabela(false);
          props.setModoEdicao(false);
          props.setClienteSelecionado({
            nome: "",
            datanasc: "",
            cpf: "",
            rg: "",
            sexo: "",
            telCliente: "",
            emailCliente: "",
            cidade: "",
            estado: "",
            cep: ""
          })
        }
      }>Cadastrar novo cliente</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Sexo</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>CEP</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            props?.listaClientes.map((cliente) => {
              return (
                <tr key={cliente.cpf}>
                  <td>{cliente.nomeCliente}</td>
                  <td>{cliente.datanasc}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.rg}</td>
                  <td>{cliente.sexo}</td>
                  <td>{cliente.telCliente}</td>
                  <td>{cliente.emailCliente}</td>
                  <td>{cliente.cidade}</td>
                  <td>{cliente.estado}</td>
                  <td>{cliente.cep}</td>
                  <td>
                    <Button variant="danger" className="m-1" onClick={() => {
                      apagarCliente(cliente.cpf);
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash mp-1" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </Button>
                    <Button variant="warning" className="m-1" onClick={() => {
                      escolherClienteEdicao(cliente);
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                      </svg>
                    </Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>
  )
}