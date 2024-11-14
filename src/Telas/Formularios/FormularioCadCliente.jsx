import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";


export default function FormularioCadCliente(props) {

  const [validado, setValidado] = useState(false);

  const [cliente, setCliente] = useState(props.clienteSelecionado);
  function atualizarCliente(evento) {
    const nome = evento.target.name;
    const valor = evento.target.value;
    setCliente({
      ...cliente,
      [nome]: valor
    });
    console.log(nome);
  }

  function Cadastrar(evento) {
    const formulario = evento.currentTarget;
    if (formulario.checkValidity()) {
      setValidado(false);
      if (!props.modoEdicao) {
        props.listaClientes.push(cliente);
        props.setExibirTabela(true);
      }
      else{
        const indice = props.listaClientes.findIndex((c) => c.cpf === cliente.cpf);
        props.listaClientes[indice] = cliente;
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
          cep: "",
        });
        props.setExibirTabela(true);
      }
    } else {
      setValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }
  return (
    <Form validated={validado} noValidate className="border p-4" onSubmit={Cadastrar}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12">
          <Form.Label>Nome Completo:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome completo..."
            id="nomeCliente"
            name="nomeCliente"
            value={cliente.nomeCliente}
            onChange={atualizarCliente}
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu nome!!!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Data de nascimento:</Form.Label>
          <Form.Control
            required
            type="date"
            id="datanasc"
            name="datanasc"
            value={cliente.datanasc}
            onChange={atualizarCliente}
          />
          <Form.Control.Feedback type="invalid">Por favor informe a data de nascimento!!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="999.999.999-99"
            id="cpf"
            name="cpf"
            value={cliente.cpf}
            onChange={atualizarCliente}
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu cpf!!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>RG:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="99.999.999-9"
            id="rg"
            name="rg"
            value={cliente.rg}
            onChange={atualizarCliente}
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu rg!!!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Informe o sexo:</Form.Label>
          <Form.Select aria-label="Default select example"
            value={cliente.sexo}
            onChange={atualizarCliente}
            required
            id="sexo"
            name="sexo">
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">Por favor selecione o sexo!!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
            type="tel"
            placeholder="(18)99999-9999"
            required
            id="telCliente"
            name="telCliente"
            value={cliente.telCliente}
            onChange={atualizarCliente}
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu telefone de contato!!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            placeholder="teste@teste.com.br"
            required
            id="emailCliente"
            name="emailCliente"
            value={cliente.emailCliente}
            onChange={atualizarCliente}
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu email!!!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Informe a cidade:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe aqui sua cidade..."
            required
            id="cidade"
            name="cidade"
            value={cliente.cidade}
            onChange={atualizarCliente}
          />
          <Form.Control.Feedback type="invalid">Por favor informe sua cidade!!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Informe o estado:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe aqui seu estado..."
            required
            id="estado"
            name="estado"
            value={cliente.estado}
            onChange={atualizarCliente}
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu estado!!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>CEP:</Form.Label>
          <Form.Control
            type="text"
            placeholder="99999-999"
            required
            id="cep"
            name="cep"
            value={cliente.cep}
            onChange={atualizarCliente}
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu cep!!!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" className="text-center m-2">{props.modoEdicao ? 'Alterar' : 'Cadastrar'}</Button>
      <Button type="button" className="text-center m-2"
        variant="secondary"
        onClick={() => { props.setExibirTabela(true); }}>Voltar</Button>
    </Form >
  )
}