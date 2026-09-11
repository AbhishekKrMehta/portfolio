import './Skills.scss'

type SkillGroup = {
    category: string
    description: string
    skills: string[]
}

const skillGroups: SkillGroup[] = [
    {
        category: 'Frontend',
        description:
            'Building maintainable interfaces, reusable components and scalable frontend architecture.',
        skills: [
            'React',
            'TypeScript',
            'JavaScript',
            'Angular',
            'RxJS',
            'NgRx',
            'Vue.js',
            'HTML',
            'CSS / SCSS',
        ],
    },
    {
        category: 'Backend',
        description:
            'Developing REST APIs and backend services with a focus on security and clean architecture.',
        skills: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'Spring MVC',
            'Spring Data JPA',
            'Hibernate',
            'REST APIs',
            'PostgreSQL',
        ],
    },
    {
        category: 'Testing',
        description:
            'Improving release confidence through unit, integration and end-to-end testing.',
        skills: [
            'Jest',
            'Playwright',
            'Cypress',
            'JUnit',
            'Mockito',
        ],
    },
    {
        category: 'Engineering',
        description:
            'Supporting reliable delivery through automation, cloud tooling and engineering practices.',
        skills: [
            'Git',
            'Docker',
            'AWS',
            'CI/CD',
            'Nx Monorepo',
            'Clean Architecture',
            'Performance Optimization',
        ],
    },
]

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="skills__header">
                    <p className="skills__eyebrow">Technical profile</p>

                    <h2>
                        A frontend-focused engineer with full-stack experience.
                    </h2>
                </div>

                <div className="skills__groups">
                    {skillGroups.map((group, index) => (
                        <article className="skills__group" key={group.category}>
                            <div className="skills__group-number">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="skills__group-content">
                                <h3>{group.category}</h3>

                                <p>{group.description}</p>

                                <ul>
                                    {group.skills.map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills