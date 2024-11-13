import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";


export default function FormularioCadCliente(props) {

  const [validado, setValidado] = useState(false);
  function Cadastrar(evento) {
    const formulario = evento.currentTarget;
    if (formulario.checkValidity()) {
      setValidado(false);
    } else {
      setValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }
  return (
    <Form validated={validado} noValidate className="border p-4" onSubmit={Cadastrar}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="nomeCliente">
          <Form.Label>Nome Completo:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome completo..."
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu nome!!!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="datanasc">
          <Form.Label>Data de nascimento:</Form.Label>
          <Form.Control
            required
            type="date"
          />
          <Form.Control.Feedback type="invalid">Por favor informe a data de nascimento!!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="cpf">
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="999.999.999-99"
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu cpf!!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="rg">
          <Form.Label>RG:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="99.999.999-9"
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu rg!!!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="sexo">
          <Form.Label>Informe o sexo:</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">Masculino</option>
            <option value="2">Feminino</option>
            <option value="3">Outro</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">Por favor selecione o sexo!!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="telCliente">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
            type="tel"
            placeholder="(18)99999-9999"
            required
          />
          <Form.Control.Feedback type="invalid">Por favor informe seu telefone de contato!!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="emailCliente">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="teste@teste.com.br" 
          required />
          <Form.Control.Feedback type="invalid">Por favor informe seu email!!!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" className="text-center">Cadastrar</Button>
    </Form >
  )
}