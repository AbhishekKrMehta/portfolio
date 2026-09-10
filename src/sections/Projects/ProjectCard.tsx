import type { Project } from './Projects'

type ProjectCardProps = {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card">
            <div className="project-card__header">
                <p className="project-card__type">
                    {project.featured ? 'Featured project' : 'Project'}
                </p>

                <h3>{project.title}</h3>
            </div>

            <p className="project-card__description">
                {project.description}
            </p>

            <ul className="project-card__technologies">
                {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>
        </article>
    )
}

export default ProjectCard