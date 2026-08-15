import { projects } from "@data/projects";
import type { Project } from "@/types";
import "@componentsSection/ProjectsSection/ProjectsSection.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="projects-section__header">
        <h2 className="projects-section__title">Все проекты</h2>
        <button className="projects-section__link">Смотреть все →</button>
      </div>
      <div className="projects-section__grid">
        {projects.slice(0, 5).map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div
        className="project-card__cover"
      >
        <img
          src={project.image}
          alt={project.name}
          className="project-card__icon"
        />
      </div>

      <h3 className="project-card__title">{project.name}</h3>
      <div className="project-card__meta">
        <span className="project-card__meta-item">{project.team} уч.</span>
        <span className="project-card__meta-item">{project.deadline}</span>
      </div>
      <div className="project-card__progress-track">
        <div
          className="project-card__progress-fill"
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
      <div className="project-card__progress-text">
        {project.progress}% завершено
      </div>
    </article>
  );
}