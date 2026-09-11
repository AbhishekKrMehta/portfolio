import "./Projects.scss";

import ProjectCard from "./ProjectCard";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "MovieCompass",
    description:
      "A full-stack movie discovery platform built with Java and Spring Boot, with a React frontend planned to consume the REST API. The backend includes authentication, authorization, movie management and integration with external movie data.",
    technologies: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "PostgreSQL",
    ],
    featured: true,
    githubUrl: "https://github.com/AbhishekKrMehta/movie-compass",
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal engineering portfolio built from scratch with React, TypeScript, Vite and SCSS. It presents my professional experience, technical skills and selected projects through a responsive interface focused on clear information architecture and maintainable component design.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "SCSS",
      "Responsive Design",
      "Accessibility",
    ],
    githubUrl: "https://github.com/AbhishekKrMehta/portfolio",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <p className="projects__eyebrow">Selected work</p>

          <h2>Projects that demonstrate how I build software.</h2>
        </div>

        <div className="projects__list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
