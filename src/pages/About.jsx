import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
        <h1>Sobre</h1>
        <p>Somos alunos dedicados à aprender rotas e componentes em React! <br />
        Aprender a configurar rotas usando o React Router, criar componentes de página, trabalhar com componentes de layout e melhorar a performance do aplicativo. Além disso, deve-se tratar rotas inválidas e utilizar parâmetros de URL.</p>
        <Link to="/">Ir para Home</Link> |{" "}
        <Link to="/contact">Ir para Contato</Link>
        </>
    )
    
}
 
export default About;
