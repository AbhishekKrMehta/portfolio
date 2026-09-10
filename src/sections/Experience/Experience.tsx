import './Experience.scss'

type ExperienceItem = {
    company: string
    project: string
    role: string
    period: string
    highlights: string[]
    technologies: string[]
}

const experiences: ExperienceItem[] = [
    {
        company: 'HCLTech',
        project: 'E.ON',
        role: 'Senior Frontend Developer',
        period: 'Jul 2022 — May 2026',
        highlights: [
            'Led development of a large-scale platform supporting consumer grid workflows.',
            'Enabled the onboarding of 25+ German DSOs through scalable multilingual solutions.',
            'Designed and implemented scalable frontend architecture.',
            'Introduced Playwright E2E testing for critical user journeys, improving release confidence.',
            'Collaborated with stakeholders and advised on frontend architecture and technical decisions.',
            'Contributed to CI/CD improvements to increase build reliability and deployment efficiency.',
        ],
        technologies: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'Playwright',
            'CI/CD',
        ],
    },
    {
        company: 'Ordina',
        project: 'Rabobank',
        role: 'Software Engineer III',
        period: 'May 2020 — Jun 2022',
        highlights: [
            'Built an Angular-based insurance platform within a monorepo, integrated with core banking systems.',
            'Developed complex nested reactive forms for financial workflows.',
            'Increased unit test coverage from below 60% to over 85%, improving code reliability.',
        ],
        technologies: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'RxJS',
            'NgRx',
            'Jest',
        ],
    },
    {
        company: 'Ordina',
        project: 'Clockwork',
        role: 'Software Engineer III',
        period: 'May 2020 — Jun 2022',
        highlights: [
            'Redesigned the homepage using Vue.js and Vuetify.',
            'Contributed to backend services using Java and Spring Boot.',
        ],
        technologies: [
            'Vue.js',
            'Vuetify',
            'Java',
            'Spring Boot',
        ],
    },
    {
        company: 'TCS',
        project: 'Air France-KLM',
        role: 'IT Analyst',
        period: 'Dec 2016 — Apr 2020',
        highlights: [
            'Developed booking and check-in flows for a platform serving up to 500K daily users.',
            'Developed multilingual booking workflows supporting international markets.',
            'Improved frontend performance and user experience across key journeys.',
            'Acted as Release Coordinator and Security Scan Coordinator.',
        ],
        technologies: [
            'Angular',
            'JavaScript',
            'TypeScript',
            'Performance',
        ],
    },
    {
        company: 'TCS',
        project: 'Cisco Systems',
        role: 'IT Analyst',
        period: 'Dec 2016 — Apr 2020',
        highlights: [
            'Built a CRM application from scratch using Angular and Java.',
            'Delivered the MVP within six months under tight deadlines.',
        ],
        technologies: [
            'Angular',
            'Java',
            'JavaScript',
        ],
    },
    {
        company: 'TCS',
        project: 'Barclays',
        role: 'IT Analyst',
        period: 'Dec 2016 — Apr 2020',
        highlights: [
            'Enhanced UI features and ensured cross-browser compatibility.',
            'Implemented accessibility improvements aligned with WCAG standards.',
        ],
        technologies: [
            'JavaScript',
            'HTML',
            'CSS',
            'Accessibility',
        ],
    },
]

function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="container">

                <div className="experience__header">
                    <p className="experience__eyebrow">Experience</p>

                    <h2>
                        9+ years building software across energy, banking and aviation.
                    </h2>
                </div>

                <div className="experience__list">
                    {experiences.map((experience) => (
                        <article
                            className="experience__item"
                            key={`${experience.company}-${experience.project}`}
                        >
                            <div className="experience__meta">
                                <span>{experience.period}</span>
                            </div>

                            <div className="experience__details">
                                <p className="experience__company">
                                    {experience.company}
                                </p>

                                <h3>{experience.project}</h3>

                                <p className="experience__role">
                                    {experience.role}
                                </p>

                                <ul className="experience__highlights">
                                    {experience.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>

                                <ul className="experience__technologies">
                                    {experience.technologies.map((technology) => (
                                        <li key={technology}>{technology}</li>
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

export default Experience