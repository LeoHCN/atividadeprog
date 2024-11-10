import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Menu(props){
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#" as={Link} to={"/"}>Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" as={Link} to={"/cadastroProdutos"}>Livros</NavDropdown.Item>
              <NavDropdown.Item href="#" as={Link} to={"/cadastroClientes"}>Clientes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}