import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";


export default function FormularioCadProduto(props) {
  
  const [validado,setValidado] = useState(false);
  function Cadastrar(evento){
    const formulario = evento.currentTarget;
    if(formulario.checkValidity()){
      setValidado(false);
    }else{
      setValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }
  return (
    <Form validated={validado} noValidate className="border p-4" onSubmit={Cadastrar}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="nome">
          <Form.Label>Nome do livro</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome do livro"
          />
          <Form.Control.Feedback type="invalid">Por favor informe o nome do livro</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="autor">
          <Form.Label>Autor do livro</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Autor do livro"
          />
          <Form.Control.Feedback type="invalid">Por favor informe o nome do autor</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="anunciante">
          <Form.Label>Nome do anunciante</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Nome do anunciante"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">Por favor informe o nome do anunciante</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="valor">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" placeholder="Valor do livro" required />
          <Form.Control.Feedback type="invalid">Por favor informe o valor do livro</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="contato">
          <Form.Label>Contato(Telefone)</Form.Label>
          <Form.Control type="text" placeholder="Telefone" required />
          <Form.Control.Feedback type="invalid">Por favor informe o telefone</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="teste@teste.com.br" required />
          <Form.Control.Feedback type="invalid">Por favor informe o email corretamente!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
          <Form.Label>Sinopse</Form.Label>
          <Form.Control as="textarea" rows={3} required />
          <Form.Control.Feedback type="invalid">Por favor informe a sinopse!!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" className="text-center">Cadastrar</Button>
    </Form>
  )
}