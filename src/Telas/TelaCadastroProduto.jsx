import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormularioCadProduto from "./Formularios/FormularioCadProduto.jsx";

export default function TelaCadastroProduto(props) {
  return (
    <Pagina>
      <Container className="mt-5">
        <h1 className="text-center">Tela de cadastro de livros</h1>
        <FormularioCadProduto />
      </Container>
    </Pagina>
  )
}