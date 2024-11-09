import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";

export default function Pagina(props){
  return(
    <Container style={{padding:5}}>
      <Cabecalho texto="Sistema de Controle de Livros"/>
      <Menu/>
      {
        props.children
      }
    </Container>
  )
}