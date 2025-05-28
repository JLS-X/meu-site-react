import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <h1>Home</h1>
        <p>Bem-vindo ao nosso site! <br />
        Atividade de Fixação: Rotas e Componentes em React</p>
        <Link to="/about">Ir para Sobre</Link> |{" "}
        <Link to="/contact">Ir para Contato</Link>
        </>
      );
}
 
export default Home;