import './About.scss'

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about__header">
                    <p className="about__eyebrow">About</p>

                    <h2>
                        Engineering with a focus on architecture, performance and
                        maintainable software.
                    </h2>
                </div>

                <div className="about__content">
                    <div className="about__intro">
                        <p>
                            I’m a software engineer with 9+ years of professional experience
                            building and evolving enterprise web applications across the
                            energy, banking and aviation sectors.
                        </p>

                        <p>
                            My experience spans frontend architecture, application
                            performance, automated testing and working with multidisciplinary
                            teams to deliver reliable software at scale.
                        </p>

                        <p>
                            I’m also expanding my backend expertise with Java and Spring Boot,
                            applying that knowledge to full-stack applications such as
                            MovieCompass.
                        </p>
                    </div>

                    <div className="about__highlights">
                        <div className="about__highlight">
                            <strong>9+</strong>
                            <span>Years of experience</span>
                        </div>

                        <div className="about__highlight">
                            <strong>500K</strong>
                            <span>Daily users supported</span>
                        </div>

                        <div className="about__highlight">
                            <strong>25+</strong>
                            <span>Utility operators onboarded</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About