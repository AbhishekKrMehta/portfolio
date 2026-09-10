import './Hero.scss'

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <p className="hero__eyebrow">Senior Software Engineer</p>

                    <h1>
                        Building thoughtful,
                        <br />
                        scalable web experiences.
                    </h1>

                    <p className="hero__description">
                        9+ years of professional experience building enterprise
                        applications, with a strong frontend background and growing
                        expertise across React, Java and Spring Boot.
                    </p>

                    <div className="hero__actions">
                        <a
                            href="#projects"
                            className="hero__action hero__action--primary"
                        >
                            View my work
                        </a>

                        <a
                            href="#contact"
                            className="hero__action hero__action--secondary"
                        >
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero