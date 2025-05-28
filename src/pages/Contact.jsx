import { Link } from "react-router-dom"

const Contact = () => {
    return ( 
        <>
        <h1>Contato</h1>
        <p>Entre em contato conosco !!! <br />
        no 0800</p>
        <Link to="/">Ir para Home</Link> |{" "}
        <Link to="/about">Ir para Sobre</Link>
        </>
     );
}
 
export default Contact;
