import './Skills.scss'

type SkillGroup = {
    category: string
    skills: string[]
}

const skillGroups: SkillGroup[] = [
    {
        category: 'Frontend',
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
                    <p className="skills__eyebrow">Skills</p>
                    <h2>Tools and technologies I work with.</h2>
                </div>

                <div className="skills__groups">
                    {skillGroups.map(group => (
                        <div className="skills__group" key={group.category}>
                            <h3>{group.category}</h3>

                            <ul>
                                {group.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills