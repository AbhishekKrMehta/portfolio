import type { Project } from './Projects'

type ProjectCardProps = {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card">
            <div className="project-card__header">
                <p className="project-card__type">
                    {project.featured ? 'Featured project' : 'Personal project'}
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

            {(project.githubUrl || project.liveUrl) && (
                <div className="project-card__links">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} GitHub repository`}
                        >
                            GitHub ↗
                        </a>
                    )}

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} live demo`}
                        >
                            Live demo ↗
                        </a>
                    )}
                </div>
            )}
        </article>
    )
}

export default ProjectCard