import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormularioCadCliente from "./Formularios/FormularioCadCliente";


export default function TelaCadastroCliente(props) {
  return (
    <Pagina>
      <Container className="mt-5">
        <h1 className="text-center">Tela de cadastro de clientes</h1>
        <FormularioCadCliente/>
      </Container>
    </Pagina>
  )
}