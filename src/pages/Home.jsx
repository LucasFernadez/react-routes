import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>¡Hola! Soy Lucas Fernández Adalid</h1>
      <p>Bienvenido a mi portfolio como desarrollador web.</p>
      <p>
        <Link to="/projects">Ver Proyectos</Link> | 
        <Link to="/resume">Ver Currículum</Link>
      </p>
    </div>
  );
}

export default Home;
