import './Projects.scss'
import ProjectCard from './ProjectCard'

export type Project = {
    title: string
    description: string
    technologies: string[]
    featured?: boolean
}

const projects: Project[] = [
    {
        title: 'MovieCompass',
        description:
            'A full-stack movie discovery platform built with Java and Spring Boot, with a React frontend planned to consume the REST API. The backend includes authentication, authorization, movie management and integration with external movie data.',
        technologies: [
            'React',
            'TypeScript',
            'Java',
            'Spring Boot',
            'Spring Security',
            'JPA',
            'PostgreSQL',
        ],
        featured: true,
    },
]

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
                        <ProjectCard
                            key={project.title}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects