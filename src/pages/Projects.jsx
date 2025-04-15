import projects from "../data/projects";

function Projects() {
  return (
    <div>
      <h2>Proyectos</h2>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <img src={project.image} alt={project.name} width="200" />
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
