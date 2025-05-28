import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <h3>404 - Página não encontrada</h3>
        <Link to={"/"}>Voltar para a Página Inicial</Link>
        </>
      );
}
 
export default NotFound;